import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'about',
      component: AboutComponent,
      title: 'About page'
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];
  
  export default routeConfig;