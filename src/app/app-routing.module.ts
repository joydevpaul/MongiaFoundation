import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './components/page/page.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'contact', component: ContactComponent},
  {path: 'page/:id', component: PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
