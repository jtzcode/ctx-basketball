import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'b-club-gallery',
  templateUrl: './b-club-gallery.component.html',
  styleUrls: ['./b-club-gallery.component.css']
})
export class BClubGalleryComponent implements OnInit {

  data: any;
  constructor() { }

  ngOnInit() {
    //this.gallery.ref('lightbox').load(this.imageItems);
    this.data = {
      thumb: "../../assets/images/gallery/g-1.jpg"
    }
  }

  openImage() {
  }

}
