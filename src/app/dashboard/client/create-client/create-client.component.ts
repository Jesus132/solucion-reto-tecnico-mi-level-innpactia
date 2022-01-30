import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { ClientForms } from 'src/app/data/schema/client/client.model';
import { ClientService } from 'src/app/data/service/client/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  FormClient: FormGroup = new ClientForms().FormClient();

  constructor(
    public clientService: ClientService,
  ) { }

  ngOnInit(): void {
  }

  private getClient(): void{
    this.clientService.getClient().subscribe(
      (resp: any) => {
        console.log(resp);
        if(resp.ok){
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

  postClient(): void{
    console.log('post', this.FormClient.value);
    this.clientService.postClient({
      name: this.FormClient.value.name,
      phone: `${this.FormClient.value.phone}`
    }).subscribe(
      (resp: any) => {
        console.log(resp);
        if(resp.ok){
          this.getClient();
          this.clientService.add_edit = 0;
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'CLiente Creado Exitosamente',
            showConfirmButton: false,
            timer: 1500
          });
        }
      },
      (err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          text: 'Error al Crear un Nuevo CLiente'
        });
      });
  }

}
