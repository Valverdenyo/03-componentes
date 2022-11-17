import { Component, OnInit } from '@angular/core';
import { PRIMARY_OUTLET } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: false
    },  {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: true
    }

  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(item: any){
    console.log(item);

  }

  verdata(){
    console.log(this.data);
  }

}
