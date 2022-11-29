import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any>;
  segmento: string = '';
  editor: string = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();

  }

  segmentChanged(evento: any) {
    this.segmento = evento.detail.value;
    if (this.segmento === 'todos') {
      this.editor = '';
      console.log(this.editor);
    }
    if (this.segmento === 'DC Comics') {
      this.editor = this.segmento;
      console.log(this.editor);
    }
    if (this.segmento === 'Marvel Comics') {
      this.editor = this.segmento;
      console.log(this.editor);
    }
  }

}
