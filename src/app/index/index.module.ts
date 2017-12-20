import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { HdwrapComponent } from './hdwrap/hdwrap.component';
import { HotsComponent } from './hots/hots.component';
import { ListComponent } from './list/list.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule
  ],
  declarations: [IndexComponent, HdwrapComponent, HotsComponent, ListComponent, ListHeaderComponent, BookListComponent]
})
export class IndexModule { }
