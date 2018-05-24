import { Component, OnInit } from '@angular/core';
import { BClubNavbarOption } from '../../models/b-club-navbar-option';
import { BClubMessageService } from '../../services/b-club-message.service';
import { MESSAGE_VALUES } from '../../constants/messages';

@Component({
  selector: 'b-club-navbar',
  templateUrl: './b-club-navbar.component.html',
  styleUrls: ['./b-club-navbar.component.css']
})
export class BClubNavbarComponent implements OnInit {

  private logoURL: string;
  private menuOptions: BClubNavbarOption[];
  private aboutItems: any[];
  
  constructor(private messageService: BClubMessageService) {
    this.logoURL = '../../assets/images/b-logo.png';
    this.menuOptions = [
      {
        title: 'Home',
        action: 'home',
        isActive: true
      },
      {
        title: 'Gallery',
        action: 'home',
        isActive: false
      },
      {
        title: 'Wiki',
        action: 'home',
        isActive: false
      }
    ];
    this.aboutItems = [
      {
        title: "How to Contribute",
        action: "contribute"
      },
      {
        title: "About Us",
        action: "about"
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

  onItemClicked() {
    this.messageService.sendMessage(MESSAGE_VALUES.ABOUT_ITEM_CLICKED);
  }

}
