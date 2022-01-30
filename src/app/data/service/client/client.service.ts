import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  public API: string = environment.api;
  public clientData: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  public add_edit = 0;
  // public itemStorage: Storage = {
  //   id: '',
  //   name: '',
  //   description: '',
  //   img: '',
  //   cont: 0,
  //   price: 0,
  // };
  
  constructor(
    private http: HttpClient
  ) { }

  public getClient(): Observable<any[]>{
    return this.http.get<any[]>(`${this.API}client`);
  }

  public postClient(client: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.API}client`, client);
  }

  public putClient(client: any): Observable<any[]> {
    return this.http.put<any[]>(`${this.API}storage`, client);
  }

  public deleteClient(id: string): Observable<any[]> {
    // return this.http.delete<Storage[]>(`${this.API}storage/${id}`);
    return this.http.delete<any[]>(`${this.API}storage`);
  }
}
