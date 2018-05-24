import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BClubContainerComponent } from './b-club-container.component';

describe('BClubContainerComponent', () => {
  let component: BClubContainerComponent;
  let fixture: ComponentFixture<BClubContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BClubContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BClubContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
