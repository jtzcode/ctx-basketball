import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'b-club-home',
  templateUrl: './b-club-home.component.html',
  styleUrls: ['./b-club-home.component.css']
})
export class BClubHomeComponent implements OnInit {

  private clubHeaderTitle: string;
  private fansHeaderTitle: string;
  
  constructor() { }

  ngOnInit() {
    this.clubHeaderTitle = 'Club Activities';
    this.fansHeaderTitle = 'Super Stars Shots';
  }

}
