import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BClubMaterialModule } from './modules/b-club-material/b-club-material.module'

import { AppComponent } from './app.component';
import { BClubNavbarComponent } from './components/b-club-navbar/b-club-navbar.component';
import { BClubNavbarItemComponent } from './components/b-club-navbar-item/b-club-navbar-item.component';
import { BClubContainerComponent } from './components/b-club-container/b-club-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BClubNavbarComponent,
    BClubNavbarItemComponent,
    BClubContainerComponent
  ],
  imports: [
    BrowserModule,
    BClubMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
