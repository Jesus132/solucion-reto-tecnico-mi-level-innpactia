import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ClientService } from 'src/app/data/service/client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  displayedColumns: string[] = ['name', 'phone'];
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor(
    public clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.getClient();
  }

  private getClient(): void{
    this.clientService.getClient().subscribe(
      (resp: any) => {
        console.log(resp);
        if(resp.ok){
          // this.dashService.storage.push(this.FormStorage.value);
          this.clientService.clientData.data = resp.clients;
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
    // this.clientService.itemStorage = item;
    this.clientService.add_edit = 2;
  }

  public deleteStorage(id: string, name: string): void{
      Swal.fire({
        icon: 'warning',
        allowOutsideClick: false,
        showCancelButton: true,
        text: `Seguro que quiere eliminar ${name}?`,
        preConfirm: () => {
          this.clientService.deleteClient(id).subscribe(
            (resp: any) => {
              // if(resp.status){
              //   this.dashService.storage = this.dashService.storage.filter(item => item.id !== id);
              //   this.storageService.StorageData.data = this.dashService.storage;
              //   Swal.fire({
              //     position: 'top-end',
              //     icon: 'success',
              //     title: 'Producto Eliminado Exitosamente',
              //     showConfirmButton: false,
              //     timer: 1500
              //   });
              // }
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
