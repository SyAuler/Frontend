import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoutesService } from '../routes.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent implements OnInit {
  id: number;
  age: number;
  name: string;
  city: string;

  form: FormGroup;
  submitted = false;

  constructor( 
      private routesService: RoutesService,
      private bsModalRef: BsModalRef,
      private fb: FormBuilder
    ) {
    }

    ngOnInit() {
      this.form = this.fb.group({
        id: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(9)]],  
        name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
        age: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
        city: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      })
    }

    close() {
      this.bsModalRef.hide();
    }

    hasErrorText(field: string){
      return this.form.get(field).errors;
    }
  
    hasErrorInteiro(field: string){
      return this.form.get(field).errors;
    }
      
    save(){
      console.log(this.form)  
      this.submitted = true;
      
      if(this.form.valid){
        this.routesService.update(this.form.value).subscribe(
          success => {
            console.log('sucesso');
          },
          error => console.log('error'),
          () => console.log('update completo')
        )
      }
    }
}

