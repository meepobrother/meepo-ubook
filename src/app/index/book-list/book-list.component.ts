import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() items: any[] = [];
  @Output() onItem: EventEmitter<any> = new EventEmitter()
  constructor() {
    this.items = []
  }

  ngOnInit() {
  }

  _onClick(item){
    this.onItem.emit(item)
  }

}
