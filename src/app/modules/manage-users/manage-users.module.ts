import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { ManageUsersComponent } from './manage-users.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ManageUsersComponent
  ],
  imports: [
    CommonModule,
    ManageUsersRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ManageUsersModule { }
