import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import {ArticlesComponent} from './articles.component'

@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ArticlesComponent, pathMatch: 'full'}
    ])
  ]
})
export class ArticlesModule {

}
