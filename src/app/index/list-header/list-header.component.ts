import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() items: any[] = [];
  @Output() onItem: EventEmitter<any> = new EventEmitter()
  @Output() onMore: EventEmitter<any> = new EventEmitter()

  @Input() hasTime: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  _onClick(item){
    this.onItem.emit(item)
  }

  _onMore(){
    this.onMore.emit('')
  }

}
