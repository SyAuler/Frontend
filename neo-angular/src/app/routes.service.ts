import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* importar o RoutesService na classe app.module.ts */
@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  clientesURL = 'http://private-92a969-processoseletivo1.apiary-mock.com/customers';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.clientesURL}`);
  }
}
