import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelRoutingModule } from './admin-panel.routing';
import { AddPostComponent } from './add-post/add-post.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddPriestComponent } from './add-priest/add-priest.component';
import { PriestTableComponent } from './priest-table/priest-table.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { PostTableComponent } from './post-table/post-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from '../table/table.module';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AddPostComponent,
    AddUserComponent,
    AddPriestComponent,
    PriestTableComponent,
    AdminTableComponent,
    PostTableComponent,
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
  ],
})
export class AdminPanelModule {}
