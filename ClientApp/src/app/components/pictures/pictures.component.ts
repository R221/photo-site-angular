import { Component, Input, OnInit } from '@angular/core';
import { Picture } from 'src/app/models/picture';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  @Input() picture: Picture;

  japanPictures = [
    {
      name: 'Tokyo Stickers',
      imageSRC: "https://d1mvkgd75mydej.cloudfront.net/DSC02726.png",
      productLink: "https://www.redbubble.com/shop/ap/95168043"
    },
    {
      name: 'Fushimi Inari: Okonomi',
      imageSRC: "https://d1mvkgd75mydej.cloudfront.net/DSC03291.jpg",
      productLink: "https://www.redbubble.com/shop/ap/96982454"
    },
    {
      name: 'Tokyo Train Tracks',
      imageSRC: "https://d1mvkgd75mydej.cloudfront.net/DSC03046.jpg",
      productLink: "https://www.redbubble.com/shop/ap/97073192"
    }
  ]

  californiaPictures = [
    {
      name: 'Wave Upon Rock',
      imageSRC: "https://d1mvkgd75mydej.cloudfront.net/20190619_0259.jpg",
      productLink: "https://www.redbubble.com/shop/ap/96982454"
    },
  ]
    

  constructor() { }

  ngOnInit(): void {
  }

}
