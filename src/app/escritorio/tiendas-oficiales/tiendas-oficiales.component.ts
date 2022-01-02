import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiendas-oficiales',
  templateUrl: './tiendas-oficiales.component.html',
  styleUrls: ['./tiendas-oficiales.component.css']
})
export class TiendasOficialesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  IMG_PLAY: string = '../../../assets/img/fd596ed4-bf03-4ecb-a3b0-7a9c0067df83.bb8f535c7677cebdd4010741c6476d3a.png'

  DATOS: any = [
    { img: this.IMG_PLAY, logo: 'ucLv0r-1.png' },
    { img: this.IMG_PLAY, logo: 'ucLv0r-1.png' },
    { img: this.IMG_PLAY, logo: 'ucLv0r-1.png' },
    { img: this.IMG_PLAY, logo: 'ucLv0r-1.png' },
    { img: this.IMG_PLAY, logo: 'ucLv0r-1.png' },
    { img: this.IMG_PLAY, logo: 'ucLv0r-1.png' },
    { img: this.IMG_PLAY, logo: 'ucLv0r-1.png' },
    { img: this.IMG_PLAY, logo: 'ucLv0r-1.png' },

  ]

}
