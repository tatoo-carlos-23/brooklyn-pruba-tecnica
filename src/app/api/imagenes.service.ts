import { Injectable } from '@angular/core';
import { ACCESORIOS, listas, OFERTA_PRODUCTO } from '../interface/imagenes';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor() { }

  ACCESORIOS: ACCESORIOS[] = [
    { accesorio: 'Partes y accesorios', descripcion: '', id: 1, ruta: 'Imagen 22@2x.png', color: 'background-color: #FFC306;' },
    { accesorio: 'Zapatillas', descripcion: '', id: 1, ruta: 'Imagen 22@2x.png', color: 'background-color: #0089D0;' },
    { accesorio: 'Bicicletas', descripcion: '', id: 1, ruta: 'Imagen 22@2x.png', color: 'background-color: #19CC55;' },

  ]

  // INTERESES
  INTERESES: listas[] = [
    { nombre: 'Grupo 1913.png', descripcion: 'Celulares', id: 0 },
    { nombre: 'Grupo 1913.png', descripcion: 'Celulares', id: 0 },
    { nombre: 'Grupo 1913.png', descripcion: 'Celulares', id: 0 },
    { nombre: 'Grupo 1913.png', descripcion: 'Celulares', id: 0 },
    { nombre: 'Grupo 1913.png', descripcion: 'Celulares', id: 0 },
    { nombre: 'Grupo 1913.png', descripcion: 'Celulares', id: 0 },
    
  ]

  // OFERTAS
  OFERTAS: OFERTA_PRODUCTO[] = [
    { img: 'Imagen 57.png', precio_inicial: 1740, precio_final: 1234, descuento: 40, descripcion: 'Refrigeradora Samsung Top Freezer Con Twin Cooling...', tipo_envio: 'Envio gratis' },
    { img: 'Imagen 57.png', precio_inicial: 1740, precio_final: 1234, descuento: 40, descripcion: 'Refrigeradora Samsung Top Freezer Con Twin Cooling...', tipo_envio: 'Envio gratis' },
    { img: 'Imagen 57.png', precio_inicial: 1740, precio_final: 1234, descuento: 40, descripcion: 'Refrigeradora Samsung Top Freezer Con Twin Cooling...', tipo_envio: 'Envio gratis' },
    { img: 'Imagen 57.png', precio_inicial: 1740, precio_final: 1234, descuento: 40, descripcion: 'Refrigeradora Samsung Top Freezer Con Twin Cooling...', tipo_envio: 'Envio gratis' },
    { img: 'Imagen 57.png', precio_inicial: 1740, precio_final: 1234, descuento: 40, descripcion: 'Refrigeradora Samsung Top Freezer Con Twin Cooling...', tipo_envio: 'Envio gratis' },
    { img: 'Imagen 57.png', precio_inicial: 1740, precio_final: 1234, descuento: 40, descripcion: 'Refrigeradora Samsung Top Freezer Con Twin Cooling...', tipo_envio: 'Envio gratis' },
    { img: 'Imagen 57.png', precio_inicial: 1740, precio_final: 1234, descuento: 40, descripcion: 'Refrigeradora Samsung Top Freezer Con Twin Cooling...', tipo_envio: 'Envio gratis' },
    { img: 'Imagen 57.png', precio_inicial: 1740, precio_final: 1234, descuento: 40, descripcion: 'Refrigeradora Samsung Top Freezer Con Twin Cooling...', tipo_envio: 'Envio gratis' },
    { img: 'Imagen 57.png', precio_inicial: 1740, precio_final: 1234, descuento: 40, descripcion: 'Refrigeradora Samsung Top Freezer Con Twin Cooling...', tipo_envio: 'Envio gratis' },
  ]
}
