import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscritorioRoutingModule } from './escritorio-routing.module';
import { EscritorioComponent } from './escritorio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { SoporteComponent } from './soporte/soporte.component';
import { InteresesComponent } from './intereses/intereses.component';
import { OfertasComponent } from './ofertas/ofertas.component';


@NgModule({
  declarations: [
    EscritorioComponent,
    NavbarComponent,
    SeleccionComponent,
    AccesoriosComponent,
    SoporteComponent,
    InteresesComponent,
    OfertasComponent
  ],
  imports: [
    CommonModule,
    EscritorioRoutingModule
  ]
})
export class EscritorioModule { }
