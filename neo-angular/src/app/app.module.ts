import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RoutesService } from './routes.service';
import { RowDataComponent } from './row-data/row-data.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    RowDataComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ RoutesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
