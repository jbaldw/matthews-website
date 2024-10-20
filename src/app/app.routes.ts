import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { WorkingWithComponent } from './working-with/working-with.component';

export const routes: Routes = [
    { path: '', component: AboutMeComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'working-with-me', component: WorkingWithComponent },
    { path: 'contact-me', component: ContactMeComponent }
];