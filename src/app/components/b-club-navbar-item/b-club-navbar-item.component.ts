import { Component, OnInit } from '@angular/core';
import { BClubNavbarOption } from '../../models/b-club-navbar-option';

@Component({
  selector: 'app-b-club-navbar-item',
  templateUrl: './b-club-navbar-item.component.html',
  styleUrls: ['./b-club-navbar-item.component.css']
})
export class BClubNavbarItemComponent implements OnInit {

  private itemOptions: BClubNavbarOption[];
  constructor() { }

  ngOnInit() {
  }

}
