import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglandGalleryComponent } from './england-gallery.component';

describe('EnglandGalleryComponent', () => {
  let component: EnglandGalleryComponent;
  let fixture: ComponentFixture<EnglandGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglandGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglandGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
