import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-california-gallery',
  styleUrls: ['../gallery-template.component.css'],
  template: `
   <ng-container *ngIf="california">
    <app-pictures
    *ngFor="let picture of californiaPictures">
    </app-pictures>
    `
})

export class CaliforniaGalleryComponent implements OnInit {

  california = true;

  californiaPictures = []

  constructor() { }

  ngOnInit(): void {
  }

}