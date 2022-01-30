import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { SettingForms } from 'src/app/data/schema/setting/setting.model';
import { SettingService } from 'src/app/data/service/setting/setting.service';
import { StorageService } from 'src/app/data/service/storage/storage.service';

interface Client {
  id: string;
  label: string;
}

@Component({
  selector: 'app-create-setting',
  templateUrl: './create-setting.component.html',
  styleUrls: ['./create-setting.component.scss']
})
export class CreateSettingComponent implements OnInit {

  FormSetting: FormGroup = new SettingForms().FormSetting();

  autoComplet = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  _options: Client[] = [];
  filteredOptions: Observable<Client[]>;

  maxDate: Date = new Date(Date.now());
  minDate: Date = new Date("2000-1-1");

  constructor(
    private storageService: StorageService,
    public settingService: SettingService
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
      this.FormSetting.patchValue({
        id_storages: _list[0].id
      });
    }
    return _list; //.map(option => option.label);
  }

  private getClient(): void {
    this.storageService.getStorage().subscribe(
      (resp: any) => {
        if (resp.ok) {
          this._options = resp.storages.map((item: any) => ({ id: item.id, label: item.model }));
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

  private getSetting(): void {
    this.settingService.getSetting().subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.ok) {
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

  public postSetting(): void {
    this.settingService.postSetting(this.FormSetting.value).subscribe(
      (resp: any) => {
        this.getSetting();
        this.settingService.add_edit = 0;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Arreglo Creado Exitosamente',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          text: 'Error al Crear un Nuevo Arreglo'
        });
      });
  }

}
