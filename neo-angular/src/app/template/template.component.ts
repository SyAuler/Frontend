
import { Component, OnInit, HostListener, TemplateRef } from '@angular/core';
import { RoutesService } from '../routes.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from "../modal/modal.component";

declare var $: any;

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  public innerWidth: any;
  public tipo_template = 0;
  contatos: Array<any>;
  modalRef: BsModalRef;

  constructor(private routesService: RoutesService,
    private modalService: BsModalService) { }
  
  ngOnInit(): void {
    this.listar();
    this.innerWidth = window.innerWidth;
  }

  openModal(cli) {
    this.modalRef = this.modalService.show(ModalComponent, {
      initialState : cli
    });
  }
  
  listar() {
    this.routesService.listar()
      .subscribe(dados => this.contatos =  dados);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      this.tipo_template = 1;
    } else {
      this.tipo_template = 0;
    }
  }

}
