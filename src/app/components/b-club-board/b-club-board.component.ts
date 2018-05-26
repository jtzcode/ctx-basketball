import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'b-club-board',
  templateUrl: './b-club-board.component.html',
  styleUrls: ['./b-club-board.component.css']
})
export class BClubBoardComponent implements OnInit {

  private boardActivityTitle: string;
  private boardBudgetTitle: string;
  private boardClubTitle: string;

  private boardActStartDate: string;
  private boardActEndDate: string;
  private boardActStartTime: string;
  private boardActEndTime: string;

  private boardActType: string = 'DAILY';
  private boardActCourt: string;

  constructor() {
    this.boardActivityTitle = 'Next Activity';
    this.boardBudgetTitle = 'Budget Balance';
    this.boardClubTitle = 'Club Announcement';

    this.boardActStartDate = '2018-05-29';
    this.boardActStartTime = '18:30';
    this.boardActEndTime = '20:30';
    this.boardActCourt = 'DAJIE Sports No. 2'

  }

  ngOnInit() {
  }

}
