import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { NewsComponent } from './news/news.component';
import { HoursComponent } from './hours/hours.component';
import { WorkersComponent } from './workers/workers.component';
import { ContactComponent } from './contact/contact.component';
import { PostPipe } from './news/post.pipe';
import { HeaderModule } from '../header/header.module';
import { TableModule } from '../table/table.module';

@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    HoursComponent,
    WorkersComponent,
    ContactComponent,
    PostPipe,
  ],
  imports: [CommonModule, HomeRoutingModule, HeaderModule, TableModule],
})
export class HomeModule {}
