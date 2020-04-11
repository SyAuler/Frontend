
import { Component, OnInit } from '@angular/core';

import { RoutesService } from '../routes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

clientes: Array<any>; /* criando um parametro para passar alista de clientes */

  constructor(private routesService: RoutesService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() { /* instancia a classe routes.service.ts */
    this.routesService.listar()
      .subscribe(dados => this.clientes = dados);
  }

}
