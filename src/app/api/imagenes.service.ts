import { Injectable } from '@angular/core';
import { imagenes } from '../interface/imagenes';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor() { }

  IMAGENES:imagenes[] = [
    {nombre:'',id:1}
  ]
}
