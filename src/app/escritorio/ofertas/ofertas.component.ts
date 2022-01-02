import { Component, OnInit } from '@angular/core';
import { ImagenesService } from 'src/app/api/imagenes.service';
import { OFERTA_PRODUCTO } from 'src/app/interface/imagenes';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  constructor(
    private api_img:ImagenesService
  ) { }

  ngOnInit(): void {
  }

  DATOS:OFERTA_PRODUCTO[] = this.api_img.OFERTAS

}
 