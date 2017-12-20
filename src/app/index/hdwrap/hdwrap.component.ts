import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'hdwrap',
  templateUrl: './hdwrap.component.html',
  styleUrls: ['./hdwrap.component.scss']
})
export class HdwrapComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() filters: any = [];

  @Output() onItem: EventEmitter<any> = new EventEmitter()
  @Output() onFilter: EventEmitter<any> = new EventEmitter()

  constructor() {
    this.items = [
      {
        title: '综合',
        active: true
      },
      {
        title: '男生',
        active: false
      },
      {
        title: '女生',
        active: false
      },
      {
        title: '出版',
        active: false
      },
      {
        title: '包月',
        active: false
      }
    ]

    this.filters = [
      {
        title: '分类',
        link: ['cate']
      },
      {
        title: '排行',
        link: ['sort']
      },
      {
        title: '免费',
        link: ['free']
      },
      {
        title: '专题',
        link: ['tplist']
      },
      {
        title: '充值',
        link: ['chongzhi']
      }
    ]
  }

  ngOnInit() {
  }

  _onItem(item){
    this.items.map(res=>{
      res.active = false;
    })
    item.active = true;
    this.onItem.emit(item)
  }

  _onFilter(item){
    this.onFilter.emit(item)
  }

}
