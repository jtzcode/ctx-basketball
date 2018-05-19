import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BClubNavbarComponent } from './components/b-club-navbar/b-club-navbar.component';
import { BClubNavbarItemComponent } from './components/b-club-navbar-item/b-club-navbar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BClubNavbarComponent,
    BClubNavbarItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
