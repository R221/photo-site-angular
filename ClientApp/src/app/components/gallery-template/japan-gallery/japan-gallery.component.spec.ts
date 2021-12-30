import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapanGalleryComponent } from './japan-gallery.component';

describe('JapanGalleryComponent', () => {
  let component: JapanGalleryComponent;
  let fixture: ComponentFixture<JapanGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JapanGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JapanGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
