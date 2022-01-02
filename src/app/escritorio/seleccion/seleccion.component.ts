import { listas } from './../../interface/imagenes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listas:listas[] = [
    {nombre:'MDI - sale.svg',descripcion:'Ofertas'},
    {nombre:'MDI - tag.svg',descripcion:'Vender'},
    {nombre:'MDI - store.svg',descripcion:'Tiendas oficiales'},
    {nombre:'Grupo 1302.svg',descripcion:'Favoritos'},
    {nombre:'Icon material-history.svg',descripcion:'Historial'}
  ]

}
