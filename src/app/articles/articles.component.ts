import {Component} from '@angular/core'

@Component({
  selector: 'articles-view',
  template: `
    <div id="articles">
      <h1>Articles</h1>
      <div id="accordion" role="tablist">
        <div class="card" *ngFor="let post of posts; index as i">
          <div id="{{'heading'+i}}" class="card-header" role="tab">
            <h5 class="mb-0">
              <a
                data-toggle="collapse"
                href="{{'#collapse'+i}}"
                [attr.aria-expanded]="i === 0"
                [attr.aria-controls]="'collapse'+i"
              >
                {{post.title}}
              </a>
            </h5>
          </div>

          <div
            id="{{'collapse'+i}}"
            class="{{'collapse'+(i > 0 ? '' : ' show')}}"
            role="tabpanel"
            [attr.aria-labelledby]="'heading'+i"
            data-parent="#accordion"
          >
            <div class="card-body">
              <img src="{{post.image}}" class="thumbnail"/>
              {{post.content}}
            </div>
          </div>
        </div>
      </div>
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
      image: "http://lorempixel.com/200/120/food",
      content: "Almonds contain high amounts of HDL which helps reduce cholestrol.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendum libero. Nam nec mi augue."
    }, {
      title: "Sugar is bad for health",
      image: "http://lorempixel.com/200/120/city",
      content: "Sugar besides being bad for diabetes, it also causes overweight and obesity problems. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in."
    }, {
      title: "Create responsive blog with Angular, Bootstrap and NodeJS",
      tag: "responsive-blog-with-angular-and-node",
      image: "http://lorempixel.com/200/120/business",
      content: "A short Tutorial on how to create a simple blog like this. The Tutorial aims to cover the Full Stack development from the Front End to the Back End with a RESTfull API service."
    }
  ]
}
