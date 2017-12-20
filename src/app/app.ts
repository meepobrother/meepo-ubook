export {
    ChapterBlockComponent, Header2Component,
    SelectorBlockDownComponent, SelectorBlockUpComponent
} from './chapter';

export {
    BookListComponent,
    HdwrapComponent,
    ListComponent,
    ListHeaderComponent,
    HotsComponent
} from './index';

export {
    BookBlockComponent
} from './intro';

export {
    ConfigComponent,
    MainComponent,
    ContentComponent,
    MoreoperComponent,
    UfooterComponent,
    UheadComponent
} from './reader';



import {
    ChapterBlockComponent,
    Header2Component,
    SelectorBlockDownComponent,
    SelectorBlockUpComponent
} from './chapter';

import {
    BookListComponent,
    HdwrapComponent,
    ListComponent,
    ListHeaderComponent,
    HotsComponent
} from './index';

import {
    BookBlockComponent
} from './intro';

import {
    ConfigComponent,
    MainComponent,
    ContentComponent,
    MoreoperComponent,
    UfooterComponent,
    UheadComponent
} from './reader';

export const ubookComponents = [
    ChapterBlockComponent,
    Header2Component,
    SelectorBlockDownComponent,
    SelectorBlockUpComponent,
    BookListComponent,
    HdwrapComponent,
    ListComponent,
    ListHeaderComponent,
    HotsComponent,
    BookBlockComponent,
    ConfigComponent,
    MainComponent,
    ContentComponent,
    MoreoperComponent,
    UfooterComponent,
    UheadComponent
];


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ...ubookComponents
    ],
    declarations: [
        ...ubookComponents
    ],
    providers: [],
})
export class MeepoUbookModule { }
