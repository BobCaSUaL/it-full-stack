import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'articles', loadChildren: './articles/articles.module#ArticlesModule'},
      { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
