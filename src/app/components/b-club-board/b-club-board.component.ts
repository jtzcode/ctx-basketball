import { Component, OnInit } from '@angular/core';
import { BClubBoardInfo } from '../../models/b-club-board-info'; 

declare var $ :any;
@Component({
  selector: 'b-club-board',
  templateUrl: './b-club-board.component.html',
  styleUrls: ['./b-club-board.component.css']
})
export class BClubBoardComponent implements OnInit {

  private boardActivityTitle: string;
  private boardBudgetTitle: string;
  private boardClubTitle: string;

  private boardInfo: BClubBoardInfo;
  private boardClubRatio: number = 0;
  private boardPrivateRatio: number = 0;

  constructor() {
    this.boardInfo = new BClubBoardInfo();
    
    this.boardActivityTitle = 'Next Activity';
    this.boardBudgetTitle = 'Budget Balance';
    this.boardClubTitle = 'Club Announcement';

    this.boardInfo.boardActStartDate = '2018-05-29';
    this.boardInfo.boardActStartTime = '18:30';
    this.boardInfo.boardActEndTime = '20:30';
    this.boardInfo.boardActCourt = 'DAJIE Sports No. 2'

    this.boardInfo.boardBudgetBalance = 1400;
    this.boardInfo.boardBudgetTotal = 2500;
    this.boardInfo.boardBudgetPrivate = 90;
    this.boardInfo.boardPrivateTotal = 100;

    this.boardInfo.boardClubAnnouncement = `Pellentesque habitant morbi tristique senectus et netus et malesuada 
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec 
            eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.`

  }

  ngOnInit() {
    console.log($('#club-balance'));
    this.boardClubRatio = Math.round(this.boardInfo.boardBudgetBalance / this.boardInfo.boardBudgetTotal * 100);
    this.boardPrivateRatio = Math.round(this.boardInfo.boardBudgetPrivate / this.boardInfo.boardPrivateTotal * 100);
    $('#club-balance').attr('data-percent', this.boardClubRatio).progress();
    $('#private-balance').attr('data-percent', this.boardPrivateRatio).progress();

    $('.b-club-balance-label').css('color', $('#club-balance .b-club-balance-bar').css('background-color'));
    $('.b-club-private-label').css('color', $('#private-balance .b-club-balance-bar').css('background-color'));
  }

}
