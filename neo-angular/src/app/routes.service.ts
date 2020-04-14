import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';

/* importar o RoutesService na classe app.module.ts */
@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  clientesURL = 'http://private-92a969-processoseletivo1.apiary-mock.com/customers';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.clientesURL}`);
  }

  update(pessoa){
    var url = this.clientesURL + '/' + pessoa.id;
    return this.http.put(url, pessoa).pipe(take(1));
  }
}
