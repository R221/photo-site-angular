import { Component } from '@angular/core';
import { ImageService } from 'src/app/image/shared/image.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent {
  image:any

  constructor(private imageService: ImageService,
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )
  }
}