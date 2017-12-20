import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterRoutingModule } from './chapter-routing.module';
import { ChapterComponent } from './chapter.component';
import { Header2Component } from './header2/header2.component';
import { SelectorBlockUpComponent } from './selector-block-up/selector-block-up.component';
import { ChapterBlockComponent } from './chapter-block/chapter-block.component';
import { SelectorBlockDownComponent } from './selector-block-down/selector-block-down.component';

@NgModule({
  imports: [
    CommonModule,
    ChapterRoutingModule
  ],
  declarations: [ChapterComponent, Header2Component, SelectorBlockUpComponent, ChapterBlockComponent, SelectorBlockDownComponent],
  exports: [ChapterComponent, Header2Component, SelectorBlockUpComponent, ChapterBlockComponent, SelectorBlockDownComponent]
})
export class ChapterModule { }
