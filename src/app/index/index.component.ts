import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  list1: any;
  filters: any;
  constructor(
      public router: Router
  ) {
    this.list1 = [
      {
        class: {
          title: '东方玄幻'
        },
        title: '凌天战尊',
        author: '风轻扬',
        desc: '地球最强兵王魂穿异世，融轮回武帝记忆，修《九龙战尊诀》，所向披靡，战威无可敌！ 会炼药、能炼器、懂铭纹…… 生活职业，全能才是王道！！'
      }
    ];
  }

  ngOnInit() {
  }

  onCategory(e){
    // 点击分类,加载数据
    console.log(e)
  }

  onFilter(e){
    // 点击导航,执行操作
    console.log(e)
    this.router.navigate(e.link)
  }

  goIntro(){
    // 书籍详情
    this.router.navigate(['intro'])
  }

}
