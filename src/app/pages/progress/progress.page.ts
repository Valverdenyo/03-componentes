import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  rangeChange (evento : any) {

    this.porcentaje = evento.detail.value.upper / 100;
    console.log(evento.detail.value.upper);
  }

}
