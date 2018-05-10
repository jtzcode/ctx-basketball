import { Component, OnInit } from '@angular/core';
import { BClubNavbarOption } from '../../models/b-club-navbar-option';

@Component({
  selector: 'b-club-navbar',
  templateUrl: './b-club-navbar.component.html',
  styleUrls: ['./b-club-navbar.component.css']
})
export class BClubNavbarComponent implements OnInit {

  private logoURL: string;
  private menuOptions: BClubNavbarOption[];
  constructor() {
    this.logoURL = '../../assets/images/b-logo.png';
    this.menuOptions = [
      {
        title: 'Home',
        action: '#',
        isActive: true
      },
      {
        title: 'Gallery',
        action: '#gallery',
        isActive: false
      },
      {
        title: 'Wiki',
        action: '#wiki',
        isActive: false
      }
    ];
   }

  ngOnInit() {
  }

  onItemActive(title: string) {
    this.menuOptions.forEach(opt => {
      if (opt.title != title) {
        opt.isActive = false;
      } else {
        opt.isActive = true;
      }
    });
  }

}
