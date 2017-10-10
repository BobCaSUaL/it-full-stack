import {Component} from '@angular/core'

@Component({
  selector: 'articles-view',
  template: `
    <div id="articles">
      <h1>Articles</h1>
      <ngb-accordion [closeOthers]="true">
        <ngb-panel title="{{post.title}}" *ngFor="let post of posts">
          <ng-template ngbPanelContent>
            <img src="{{post.image}}" class="thumbnail"/>
            {{post.content}}
          </ng-template>
        </ngb-panel>
      </ngb-accordion>
    </div>
  `,
  styles: [`
    #articles {
      padding: 16px
    }
    h1 {
      padding: 8px
    }
    img.thumbnail {
      width: 200px; height: 120px;
      margin: 0 10px 0 5px;
      float: left;
    }
  `]
})
export class ArticlesComponent {
  posts = [
    {
      title: "Almonds are good for Health",
      image: "http://lorempixel.com/200/120/",
      content: "Almonds contain high amounts of HDL which helps reduce cholestrol.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendum libero. Nam nec mi augue."
    }, {
      title: "Sugar is bad for health",
      image: "http://lorempixel.com/200/120/",
      content: "Sugar besides being bad for diabetes, it also causes overweight and obesity problems. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in."
    }, {
      title: "Create responsive blog with Angular, Bootstrap and NodeJS",
      tag: "responsive-blog-with-angular-and-node",
      image: "http://lorempixel.com/200/120/",
      content: "A short Tutorial on how to create a simple blog like this. The Tutorial aims to cover the Full Stack development from the Front End to the Back End with a RESTfull API service."
    }
  ]
}
