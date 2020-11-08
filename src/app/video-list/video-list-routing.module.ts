import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './video-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: VideoListComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoListRoutingModule { }
