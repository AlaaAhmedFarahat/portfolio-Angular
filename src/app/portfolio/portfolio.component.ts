import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  photos = [
    '/poert1.png',
        '/port2.png',
        '/port3.png',
        '/poert1.png',
        '/port2.png',
        '/port3.png',
  ];

  imgSrc:any;

  image(myPhoto :any):void {
    this.imgSrc = myPhoto;
  }

}
