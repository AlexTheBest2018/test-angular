import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GridDataComponent } from './components/grid-data/grid-data.component';
import { VideoListComponent } from './video-list.component';
import { VideoListRoutingModule } from './video-list-routing.module';


@NgModule({
  declarations: [
    GridDataComponent,
    VideoListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VideoListRoutingModule
  ],
})
export class VideoListModule { }
