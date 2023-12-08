import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BibliographieComponent } from './bibliographie/bibliographie.component';
import { DebunkPageComponent } from './debunk-page/debunk-page.component';

const routeConfig: Routes = [
   
    {
      path: 'about',
      component: AboutComponent,
      title: 'About page'
    },
    {
      path: 'debunk',
      component: DebunkPageComponent,
      title: 'Debunk page'
    },
    {
      path: 'bibliographie',
      component: BibliographieComponent,
      title: 'Bibliographie'
    },
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];
  
  export default routeConfig;