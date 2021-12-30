import { Component, Input, OnInit } from '@angular/core';
import { Picture } from 'src/app/models/picture';

@Component({
  selector: 'app-england-gallery',
  styleUrls: ['./england-gallery.component.css'],
  template: `
  <ng-container *ngIf="england">
    <app-gallery-template><app-gallery-template>
      <ng-container *ngFor="let picture of pictures">
`
})

export class EnglandGalleryComponent implements OnInit {

  england = true;

  @Input() picture: Picture;

  pictures:Picture[] = [
    {name: 'example1', imageSRC: 'imageSRC', productLink: 'link'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
