import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BClubBoardComponent } from './b-club-board.component';

describe('BClubBoardComponent', () => {
  let component: BClubBoardComponent;
  let fixture: ComponentFixture<BClubBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BClubBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BClubBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
