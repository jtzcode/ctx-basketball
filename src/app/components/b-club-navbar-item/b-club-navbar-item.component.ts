import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { LOGIN_TEXT } from '../../constants/display';
import { MESSAGE_VALUES } from '../../constants/messages';
import { BClubMessageService } from '../../services/b-club-message.service';

@Component({
  selector: 'b-club-navbar-item',
  templateUrl: './b-club-navbar-item.component.html',
  styleUrls: ['./b-club-navbar-item.component.css']
})
export class BClubNavbarItemComponent implements OnInit {

  //private itemOptions: BClubNavbarOption[];
  @Input() private itemTitle: string;
  @Input() private route: string;
  @Input() private isActive: boolean;
  @Input() private isDropdown: boolean;

  @Output() onSelected = new EventEmitter<string>();

  private subscription: Subscription;
  private outsideMessage: any;

  constructor(private messageService: BClubMessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.outsideMessage = message;
      if(message && message.text == MESSAGE_VALUES.ABOUT_ITEM_CLICKED) {
        //Use an undefined title to unselect all menu items
        this.onSelected.emit("UNSELECTED");
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

  clickItem() {
    if (this.itemTitle != LOGIN_TEXT) {
      this.onSelected.emit(this.itemTitle);
    }
  }

}
