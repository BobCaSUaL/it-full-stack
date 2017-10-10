import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router'
import {ArticlesComponent} from './articles.component'

@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ArticlesComponent, pathMatch: 'full'}
    ]),
    NgbModule
  ]
})
export class ArticlesModule {

}
