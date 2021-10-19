import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { ContactComponent }   from './contact/contact.component';
import { AboutComponent }     from './about/about.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home',        component: HomeComponent },
  { path: 'contact',        component: ContactComponent },
  { path: 'about',   component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}