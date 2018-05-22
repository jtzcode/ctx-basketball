import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BClubAboutComponent } from './b-club-about.component';

describe('BClubAboutComponent', () => {
  let component: BClubAboutComponent;
  let fixture: ComponentFixture<BClubAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BClubAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BClubAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
