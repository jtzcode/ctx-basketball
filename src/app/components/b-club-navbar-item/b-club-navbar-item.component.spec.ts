import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BClubNavbarItemComponent } from './b-club-navbar-item.component';

describe('BClubNavbarItemComponent', () => {
  let component: BClubNavbarItemComponent;
  let fixture: ComponentFixture<BClubNavbarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BClubNavbarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BClubNavbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
