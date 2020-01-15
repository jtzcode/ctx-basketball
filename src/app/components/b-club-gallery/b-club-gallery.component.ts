import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'b-club-gallery',
  templateUrl: './b-club-gallery.component.html',
  styleUrls: ['./b-club-gallery.component.css']
})
export class BClubGalleryComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    //this.gallery.ref('lightbox').load(this.imageItems);
  }

  openImage() {
  }

}
