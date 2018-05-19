import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BClubNavbarComponent } from './b-club-navbar.component';

describe('BClubNavbarComponent', () => {
  let component: BClubNavbarComponent;
  let fixture: ComponentFixture<BClubNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BClubNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BClubNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
