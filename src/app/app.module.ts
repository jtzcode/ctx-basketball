import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BClubMaterialModule } from './modules/b-club-material/b-club-material.module';

import { AppComponent } from './app.component';
import { BClubNavbarComponent } from './components/b-club-navbar/b-club-navbar.component';
import { BClubNavbarItemComponent } from './components/b-club-navbar-item/b-club-navbar-item.component';
import { BClubContainerComponent } from './components/b-club-container/b-club-container.component';

import { APP_ROUTES } from './constants/routes';
import { BClubAboutComponent } from './components/b-club-about/b-club-about.component';
import { BClubHomeComponent } from './components/b-club-home/b-club-home.component';
import { BClubGalleryComponent } from './components/b-club-gallery/b-club-gallery.component';
import { BClubBoardComponent } from './components/b-club-board/b-club-board.component';

@NgModule({
  declarations: [
    AppComponent,
    BClubNavbarComponent,
    BClubNavbarItemComponent,
    BClubContainerComponent,
    BClubAboutComponent,
    BClubHomeComponent,
    BClubGalleryComponent,
    BClubBoardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BClubMaterialModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
