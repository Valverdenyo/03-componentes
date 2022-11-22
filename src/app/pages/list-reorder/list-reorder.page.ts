import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';


@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  public isDisabled = true;

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'WonderWoman', 'Flash'];

  constructor() { }

  ngOnInit() {
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {

    
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly

    const itemMover = this.personajes.splice (ev.detail.from, 1)[0];
    this.personajes.splice (ev.detail.to, 0, itemMover);
    ev.detail.complete();
    console.log(this.personajes);
    // by the reorder group
    ev.detail.complete();


    
  }

  toggle (){
    this.isDisabled = !this.isDisabled;
  }

 
}
