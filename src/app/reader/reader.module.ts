import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReaderRoutingModule } from './reader-routing.module';
import { ReaderComponent } from './reader.component';
import { MainComponent } from './main/main.component';
import { UheadComponent } from './uhead/uhead.component';
import { UfooterComponent } from './ufooter/ufooter.component';
import { ConfigComponent } from './config/config.component';
import { MoreoperComponent } from './moreoper/moreoper.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    ReaderRoutingModule
  ],
  declarations: [ReaderComponent, MainComponent, UheadComponent, UfooterComponent, ConfigComponent, MoreoperComponent, ContentComponent]
})
export class ReaderModule { }
