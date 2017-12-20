import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';
import {ChapterModule} from "../chapter/chapter.module";
import { BookBlockComponent } from './book-block/book-block.component';

@NgModule({
  imports: [
    CommonModule,
    IntroRoutingModule,
    ChapterModule
  ],
  declarations: [IntroComponent, BookBlockComponent]
})
export class IntroModule { }
