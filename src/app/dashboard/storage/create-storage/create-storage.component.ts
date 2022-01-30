import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { StorageService } from 'src/app/data/service/storage/storage.service';
import { DashboardService } from 'src/app/data/service/dashboard.service';
import { StorageForms } from 'src/app/data/schema/storage/storage.model';
import { Storage } from 'src/app/data/schema/storage/storage.interface';
import { ClientService } from 'src/app/data/service/client/client.service';

interface Client {
  id: string;
  label: string;
}

@Component({
  selector: 'app-create-storage',
  templateUrl: './create-storage.component.html',
  styleUrls: ['./create-storage.component.scss']
})
export class CreateStorageComponent implements OnInit {

  FormStorage: FormGroup = new StorageForms().FormStorage();

  autoComplet = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  _options: Client[] = [];
  filteredOptions: Observable<Client[]>;

  constructor(
    private dashService: DashboardService,
    private clientService: ClientService,
    public storageService: StorageService
  ) {
    this.filteredOptions = this.autoComplet.valueChanges.pipe(
      startWith(''),
      map((value: String) => this._filter(value)),
    );
  }

  ngOnInit(): void {
    this.getClient();
  }

  private _filter(value: String): Client[] {
    const filterValue = value.toLowerCase();
    const _list = this._options.filter(option => option.label.toLowerCase().includes(filterValue));
    if (_list.length === 1) {
      this.FormStorage.patchValue({
        id_client: _list[0].id
      });
    }
    return _list; //.map(option => option.label);
  }

  private getClient(): void {
    this.clientService.getClient().subscribe(
      (resp: any) => {
        if (resp.ok) {
          this._options = resp.clients.map((item: any) => ({ id: item.id, label: item.name }));
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

  private getStorage(): void {
    this.dashService.getStorage().subscribe(
      (resp: any) => {
        this.storageService.StorageData.data = resp.storages;
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

  public postStorage(): void {
    this.storageService.postStorage(this.FormStorage.value).subscribe(
      (resp: any) => {
        this.getStorage();
        this.storageService.add_edit = 0;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Telefono Creado Exitosamente',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          text: 'Error al Crear un Nuevo Producto'
        });
      });
  }

}
