import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';
import { HoursComponent } from './hours/hours.component';
import { NewsComponent } from './news/news.component';
import { WorkersComponent } from './workers/workers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'aktualnosci' },
      { path: 'aktualnosci', component: NewsComponent },
      { path: 'godziny', component: HoursComponent },
      { path: 'ksieza', component: WorkersComponent },
      { path: 'kontakt', component: ContactComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
