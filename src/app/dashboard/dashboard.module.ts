import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StorageComponent } from './storage/storage.component';
import { CreateStorageComponent } from './storage/create-storage/create-storage.component';
import { EditStorageComponent } from './storage/edit-storage/edit-storage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from '../theme/sidebar/sidebar.component';
import { ClientComponent } from './client/client.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { SettingComponent } from './setting/setting.component';
import { CreateSettingComponent } from './setting/create-setting/create-setting.component';
import { EditSettingComponent } from './setting/edit-setting/edit-setting.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HomeComponent,
    StorageComponent,
    CreateStorageComponent,
    EditStorageComponent,
    ClientComponent,
    CreateClientComponent,
    EditClientComponent,
    SettingComponent,
    CreateSettingComponent,
    EditSettingComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class DashboardModule { }
