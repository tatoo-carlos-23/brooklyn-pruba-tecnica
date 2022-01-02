import { ImagenesService } from './../../api/imagenes.service';
import { Component, OnInit } from '@angular/core';
import { ACCESORIOS } from 'src/app/interface/imagenes';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {
  LISTA_IMAGENES: ACCESORIOS[] = []
  constructor(
    private api_img: ImagenesService
  ) { }

  ngOnInit(): void {
    this.cargar()
  }

  cargar() {
    this.LISTA_IMAGENES = this.api_img.ACCESORIOS
    console.log(this.LISTA_IMAGENES)
  }

 
}
