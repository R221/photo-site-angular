import { Component, OnInit, Input } from '@angular/core';
import { Picture } from 'src/app/models/picture';

@Component({
  selector: 'app-picture-detail',
  templateUrl: './picture-detail.component.html',
  styleUrls: ['./picture-detail.component.css']
})
export class PictureDetailComponent implements OnInit {

  @Input() picture: Picture;

  constructor() { }

  ngOnInit(): void {
  }

}
