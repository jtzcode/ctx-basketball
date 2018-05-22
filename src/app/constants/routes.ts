import { BClubHomeComponent } from '../components/b-club-home/b-club-home.component';
import { BClubAboutComponent } from '../components/b-club-about/b-club-about.component';
export const APP_ROUTES: any = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: BClubHomeComponent },
    { path: 'about', component: BClubAboutComponent },
    { path: 'contribute', component: BClubAboutComponent }
];