import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items: any[] = [];
  @Output() onItem: EventEmitter<any> = new EventEmitter()
  @Input() top: any;

  constructor() { }

  ngOnInit() {
  }

  _onClick(item){
    this.onItem.emit(item)
  }

}
