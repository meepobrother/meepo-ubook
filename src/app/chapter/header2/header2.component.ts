import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component implements OnInit {
  @Input() title: string = '标题';
  constructor(
      public router: Router
  ) { }

  ngOnInit() {
  }

  goBack(){
    history.go(-1)
  }

  goHome(){
    this.router.navigate(['index'])
  }

}
