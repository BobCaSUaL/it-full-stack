import {Component} from '@angular/core'

@Component({
  selector: 'gallery-view',
  template: `
    <div id="gallery">
      <h1>Gallery</h1>
      <div class="thumbnails container">
        <div class="col-md-4" *ngFor="let picture of pictures">
          <ngb-rating max="5"></ngb-rating>
          <img src="{{picture.url}}">
          <h3>{{picture.title}}</h3>
          <p> {{picture.summary}}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    #gallery {
      padding: 16px
    }
    #gallery h1 {
      padding: 8px
    }
    #gallery .thumbnails img {
      width: 100%
    }
  `]
})
export class GalleryComponent {
  pictures

  constructor() {
    const baseURL="http://lorempixel.com/300/180/";
    const titles=[
      "Healthy Food","Healthy @ Work","City Life ",
      "Staying Fit","Looking Good","Nightlife !!"
    ]
    const keywords=[
      "food", "business","city","sports","fashion", "nightlife"
    ]
    const dummyText=`
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sed sed erat turpis. Integer eget
      consectetur quam. Sed at quam ut dolor varius
      condimentum et sit amet odio.
    `
    this.pictures = new Array(5).fill('$').map((_, index) => ({
      url: baseURL + keywords[index],
      title: titles[index],
      summary: dummyText
    }))
  }
}
