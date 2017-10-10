import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light fixed-top">
    <a class="navbar-brand" routerLink="/">Developer</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" routerLink="/articles">Articles<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/gallery">Gallery</a>
        </li>
        <!--li class="nav-item">
          <a class="nav-link" routerLink="/subscribers">Subscribers</a>
        </li-->
      </ul>
    </div>
  </nav>
  <div id="body" class="container-fluid">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [`
    .navbar.fixed-top {
      -moz-box-shadow:    3px 2px 3px 3px rgba(153, 153, 153, 0.6);
      -webkit-box-shadow: 3px 2px 3px 3px rgba(153, 153, 153, 0.6);
      box-shadow:         3px 2px 3px 3px rgba(153, 153, 153, 0.6);
    }
    #body {
      margin-top: 56px
    }
  `]
})
export class AppComponent {
}
