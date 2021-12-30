import { Component, Input, OnInit } from '@angular/core';
import { Picture } from 'src/app/models/picture';

@Component({
  selector: 'app-gallery-template',
  templateUrl: './gallery-template.component.html',
  styleUrls: ['./gallery-template.component.css']
})
export class GalleryTemplateComponent implements OnInit {

  picture: Picture[];
  
  constructor() {}

  ngOnInit(): void {
  }

}
