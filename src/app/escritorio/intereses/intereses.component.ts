import { ImagenesService } from './../../api/imagenes.service';
import { Component, OnInit } from '@angular/core';
import { listas } from 'src/app/interface/imagenes';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.css']
})
export class InteresesComponent implements OnInit {

  constructor(
    private api_img:ImagenesService
  ) { }

  INTERESES:listas[] = this.api_img.INTERESES

  ngOnInit(): void {
  }

}
 