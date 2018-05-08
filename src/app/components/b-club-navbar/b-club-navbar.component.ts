import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'b-club-navbar',
  templateUrl: './b-club-navbar.component.html',
  styleUrls: ['./b-club-navbar.component.css']
})
export class BClubNavbarComponent implements OnInit {

  private logoURL: string;
  constructor() {
    this.logoURL = '../../assets/images/b-logo.png';
   }

  ngOnInit() {
  }

}
