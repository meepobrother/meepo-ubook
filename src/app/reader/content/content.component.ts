import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() content: any;
  constructor() {
    this.content = '<h2>哈哈哈</h2>'
  }

  ngOnInit() {
  }

}
