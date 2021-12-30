import { Component, Input, OnInit } from '@angular/core';
import { Picture } from 'src/app/models/picture';

@Component({
  selector: 'app-japan-gallery',
  styleUrls: ['./japan-gallery.component.css'],
  template: `
  <ng-container *ngIf="japan">
    <app-pictures
    *ngFor="let picture of japanPictures">
    </app-pictures>
`
})

export class JapanGalleryComponent implements OnInit {

  japan = true;
  
  japanPictures = []


  constructor() { }

  ngOnInit(): void {
  }

}
