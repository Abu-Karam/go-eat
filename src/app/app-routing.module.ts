import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuComponent} from './menu/menu.component';
import { GallaryComponent } from './gallary/gallary.component';
import { FindUsComponent } from './find-us/find-us.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'gallary', component: GallaryComponent},
  { path: 'find-us', component: FindUsComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
