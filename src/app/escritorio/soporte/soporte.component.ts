import { Component, OnInit } from '@angular/core';
import { DATOS_SOPORTE } from 'src/app/interface/imagenes';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  DATOS: DATOS_SOPORTE[] = [
    { titulo: 'ENVÍO GRATIS', subtitulo: 'Envio gratis en toda la Paz. O pedidos superiores a los $125 Bo.', ruta: 'delivery-truck (2).png' },
    { titulo: 'SOPORTE 24/7', subtitulo: 'Contáctenos las 24 horas del día los 7 dias de la semana', ruta: 'support.png' },
    { titulo: 'REGRESO 30 DÍAS', subtitulo: 'Simplemente devuélvalo dentro de los 30 dias para un cambio de articulo.', ruta: 'return.png' },
    { titulo: 'PAGO 100% SEGURO', subtitulo: 'Garantizamos un pago seguro con IGV.', ruta: 'credit-card (1).png' }
  ]

}
