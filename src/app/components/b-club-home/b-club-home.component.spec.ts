import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BClubHomeComponent } from './b-club-home.component';

describe('BClubHomeComponent', () => {
  let component: BClubHomeComponent;
  let fixture: ComponentFixture<BClubHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BClubHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BClubHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
