import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  template: `
    <div id="home">

      <div id="home-carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-target="#home-carousel"
            [attr.data-slide-to]="i"
            [attr.class]="i === 0 ? 'active' : ''"
            *ngFor="let slide of slides; index as i"
          ></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div
            [attr.class]="'carousel-item' + (i === 0 ? ' active' : '')"
            *ngFor="let slide of slides; index as i"
          >
            <img
              class="d-block img-fluid"
              src="{{slide.image.src}}"
              alt="{{slide.image.attr}}"
            >
            <div class="carousel-caption">
              <h3>{{slide.header}}</h3>
              <p>{{slide.paragraph}}</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#home-carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#home-carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>


      <div class="banner">
        <h1>{{banner.title}}</h1>
        <p>{{banner.paragraph}}</p>
      </div>
      <div class="container-fluid d-flex justify-content-around flex-wrap">
        <div
          class="block m-3"
          *ngFor="let block of blocks"
        >
          <img class="rounded-circle" src="{{block.img.src}}" alt="{{block.img.alt}}">
          <h3 class="text-center">{{block.title}}</h3>
          <p class="">{{block.summary}} </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    #home-carousel {
      height: 70vh;
    }
    .carousel-inner, .carousel-item {
      width: 100%;
      height: 70vh;
    }
    .carousel-item > img {
      min-width: 100%; min-height: 100%;
      width: auto; height: auto;
      position: absolute;
      top: 50%; left: 50%; margin-right: -50%;
      transform: translate(-50%, -50%);
      object-fit: cover
    }
    .carousel-caption {
      background-image: radial-gradient(
        rgba(0,0,0,0.03),
        rgba(0,0,0,0.001)
      );
      text-shadow: 1px 1px 1px #000;
    }
    .banner {
        font-size: 18px;
        font-weight: 200;
        line-height: 30px;
        background-color: #eee;
        border-radius: 6px;
        padding: 60px;
    }
    .block {
      max-width: 200px
    }
  `],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  slides;
  banner = {
    title: `Hi I'm a full-stack web developer.`,
    paragraph: `
      This is a Rapid Prototype demo on how you can use angularjs with
      Angular UI and Bootstrap to quickly build a clickable prototype that
      can be shown to clients
    `
  }
  blocks = [
    {
       img: {
         src: 'http://lorempixel.com/200/200/people',
         alt: ``
       },
       title:'About me',
       summary:`
          We are good, we are the best out there
        `
    },
    {
       img: {
         src: 'http://lorempixel.com/200/200/business',
         alt: ``
       },
       title:'Portfolio',
       summary: `
          We offer advice on staying Healthly, what to eat...
          what are the best exercises for you etc.
        `
    },
    {
       img: {
         src: 'http://lorempixel.com/200/200/transport',
         alt: ``
       },
       title:'Contacts',
       summary:`
          #111, Good Health Blvd, Happy Place, Antartica, Zip-432167
        `
    }
  ]

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit() {
    this.slides = [{
      image: {
        src: 'https://lorempixel.com/900/500?r=4',
        alt: 'Random first slide'
      },
      header: '10 seconds between slides...',
      paragraph: 'This carousel uses customized default values.'
    }, {
      image: {
        src: 'https://lorempixel.com/900/500?r=5',
        alt: 'Random second slide'
      },
      header: 'No keyboard...',
      paragraph: 'This carousel uses customized default values.'
    }, {
      image: {
        src: 'https://lorempixel.com/900/500?r=6',
        alt: 'Random third slide'
      },
      header: 'And no wrap after last slide.',
      paragraph: 'This carousel uses customized default values.'
    }]
  }
}
