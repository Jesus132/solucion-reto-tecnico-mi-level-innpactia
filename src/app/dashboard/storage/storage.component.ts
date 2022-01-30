import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { DashboardService } from 'src/app/data/service/dashboard.service';
import { StorageService } from 'src/app/data/service/storage/storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

  displayedColumns: string[] = ['name', 'model', 'observation'];
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor(
    private dashService: DashboardService,
    public storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getStorage();
  }

  private getStorage(): void {
    this.dashService.getStorage().subscribe(
      (resp: any) => {
        this.storageService.StorageData = new MatTableDataSource<any>(resp.storages);
        this.storageService.StorageData.paginator = this.paginator;
        this.storageService.StorageData.sort = this.sort;
      },
      (err) => {
        console.log(err);
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Error',
        //   text: this.TXT_ERROR
        // });
      });
  }

  public openEdit(item: any): void{
    console.log(item);
    this.storageService.itemStorage = item;
    this.storageService.add_edit = 2;
  }

  public deleteStorage(id: string, name: string): void{
      Swal.fire({
        icon: 'warning',
        allowOutsideClick: false,
        showCancelButton: true,
        text: `Seguro que quiere eliminar ${name}?`,
        preConfirm: () => {
          this.storageService.deleteStorage(id).subscribe(
            (resp: any) => {
              if(resp.status){
                this.dashService.storage = this.dashService.storage.filter(item => item.id !== id);
                this.storageService.StorageData.data = this.dashService.storage;
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Telefono Eliminado Exitosamente',
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            },
            (err) => {
              console.log(err);
              Swal.fire({
                icon: 'error',
                text: 'Error, Intentarlo mas Tarde'
              });
            });
        }
      });
  }

}
