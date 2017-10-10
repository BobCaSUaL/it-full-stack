import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router'
import {GalleryComponent} from './gallery.component'

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: GalleryComponent, pathMatch: 'full'}
    ]),
    NgbModule
  ]
})
export class GalleryModule {

}
