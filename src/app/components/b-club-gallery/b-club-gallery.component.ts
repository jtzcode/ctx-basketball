import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

@Component({
  selector: 'b-club-gallery',
  templateUrl: './b-club-gallery.component.html',
  styleUrls: ['./b-club-gallery.component.css']
})
export class BClubGalleryComponent implements OnInit {

  imageItems: GalleryItem[] = [
    new ImageItem('assets/images/gallery/g-1.jpg', 'assets/images/gallery/g-1.jpg'),
    new ImageItem('assets/images/gallery/g-2.jpg', 'assets/images/gallery/g-2.jpg'),
    new ImageItem('assets/images/gallery/g-3.png', 'assets/images/gallery/g-3.png'),
    new ImageItem('assets/images/gallery/g-4.jpg', 'assets/images/gallery/g-4.jpg'),
    new ImageItem('assets/images/gallery/g-4.jpg', 'assets/images/gallery/g-4.jpg')
  ];

  constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit() {
    this.gallery.ref('lightbox').load(this.imageItems);
  }

}
