import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  styleUrls: ['./about.component.scss'],
  templateUrl: './about.component.html',

})
export class AboutComponent implements OnInit {

  show = true;
 
  constructor() { }

  ngOnInit(): void {
  }

}
