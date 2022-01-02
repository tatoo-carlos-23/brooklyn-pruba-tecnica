export interface imagenes {
    nombre: string,
    id: number
}

export interface listas {
    nombre: string,
    descripcion: string,
    id?: number
}

export interface ACCESORIOS {
    accesorio: string,
    descripcion: string,
    id?: number,
    ruta: string,
    color?: string
}

export interface DATOS_SOPORTE {
    titulo: string,
    subtitulo: string,
    ruta: string
}

export interface OFERTA_PRODUCTO {
    img: string,
    precio_inicial: number,
    precio_final: number,
    descuento: number,
    descripcion: string,
    tipo_envio: string
}