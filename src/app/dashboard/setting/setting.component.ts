import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SettingService } from 'src/app/data/service/setting/setting.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  displayedColumns: string[] = ['name', 'model', 'date', 'observation'];
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor(
    public settingService: SettingService
  ) { }

  ngOnInit(): void {
  this.getSetting();
  }

  private getSetting(): void{
    this.settingService.getSetting().subscribe(
      (resp: any) => {
        console.log(resp);
        if(resp.ok){
          this.settingService.SettingData.data = resp.settings;
        }
      },
      (err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          text: 'Error en el servidor!!!'
        });
      });
  }

  public openEdit(item: any): void{
    console.log(item);
    // this.settingService.itemSetting = item;
    this.settingService.add_edit = 2;
  }

  public deleteStorage(id: string, name: string): void{
      Swal.fire({
        icon: 'warning',
        allowOutsideClick: false,
        showCancelButton: true,
        text: `Seguro que quiere eliminar ${name}?`,
        preConfirm: () => {
          // this.storageService.deleteStorage(id).subscribe(
          //   (resp: any) => {
          //     if(resp.status){
          //       this.dashService.storage = this.dashService.storage.filter(item => item.id !== id);
          //       this.storageService.StorageData.data = this.dashService.storage;
          //       Swal.fire({
          //         position: 'top-end',
          //         icon: 'success',
          //         title: 'Arreglo Eliminado Exitosamente',
          //         showConfirmButton: false,
          //         timer: 1500
          //       });
          //     }
          //   },
          //   (err) => {
          //     console.log(err);
          //     Swal.fire({
          //       icon: 'error',
          //       text: 'Error, Intentarlo mas Tarde'
          //     });
          //   });
        }
      });
  }

}
