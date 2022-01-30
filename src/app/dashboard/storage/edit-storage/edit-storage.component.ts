import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { StorageForms } from 'src/app/data/schema/storage/storage.model';
import { StorageService } from 'src/app/data/service/storage/storage.service';
import { DashboardService } from 'src/app/data/service/dashboard.service';

@Component({
  selector: 'app-edit-storage',
  templateUrl: './edit-storage.component.html',
  styleUrls: ['./edit-storage.component.scss']
})
export class EditStorageComponent implements OnInit {

  FormStorage: FormGroup = new StorageForms().FormStorage();
  
  constructor(
    private dashService: DashboardService,
    public storageService: StorageService
  ) {
    this.FormStorage.setValue({
      id: this.storageService.itemStorage.id,
      name: this.storageService.itemStorage.name,
      description: this.storageService.itemStorage.description,
      img: this.storageService.itemStorage.img,
      cont: this.storageService.itemStorage.cont,
      price: this.storageService.itemStorage.price,
    });
  }

  ngOnInit(): void {
  }

  public putStorage(): void{
    this.storageService.putStorage(this.FormStorage.value).subscribe(
      (resp: any) => {
        if(resp.status){
          const index = this.dashService.storage.findIndex(item => item.id === this.FormStorage.value.id);
          this.dashService.storage[index] = this.FormStorage.value;
          this.storageService.StorageData.data = this.dashService.storage;
          this.storageService.add_edit = 0;
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto Editado Exitosamente',
            showConfirmButton: false,
            timer: 1500
          });
        }
      },
      (err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          text: 'Error al editar el Producto'
        });
      });
  }

}
