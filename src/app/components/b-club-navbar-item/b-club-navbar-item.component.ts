import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { LOGIN_TEXT } from '../../constants/display';

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

  @Output() onSelected = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  clickItem() {
    if (this.itemTitle != LOGIN_TEXT) {
      this.onSelected.emit(this.itemTitle);
    }
  }

}
