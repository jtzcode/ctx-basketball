import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BClubGalleryComponent } from './b-club-gallery.component';

describe('BClubGalleryComponent', () => {
  let component: BClubGalleryComponent;
  let fixture: ComponentFixture<BClubGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BClubGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BClubGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
