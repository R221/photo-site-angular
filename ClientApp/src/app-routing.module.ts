import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './app/components/home/home.component';
import { CaliforniaGalleryComponent } from './app/components/gallery-template/california-gallery/california-gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './app/components/about/about.component';
import { JapanGalleryComponent } from './app/components/gallery-template/japan-gallery/japan-gallery.component';
import { EnglandGalleryComponent } from './app/components/gallery-template/england-gallery/england-gallery.component';
import { GalleryComponent } from './app/gallery/gallery/gallery.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'About', component: AboutComponent},
  { path: 'California', component: CaliforniaGalleryComponent},
  { path: 'Japan', component: JapanGalleryComponent},
  { path: 'England', component: EnglandGalleryComponent},
  { path: 'Gallery', component: GalleryComponent}  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), 
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
