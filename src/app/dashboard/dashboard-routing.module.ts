import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { StorageComponent } from './storage/storage.component';

const routes: Routes = 
[
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'client',
        component: ClientComponent
      },
      {
        path: 'storage',
        component: StorageComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
