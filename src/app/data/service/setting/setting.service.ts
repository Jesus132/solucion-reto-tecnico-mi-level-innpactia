import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  public API: string = environment.api;
  public SettingData: MatTableDataSource<any> = new MatTableDataSource<any>([]);
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

  public getSetting(): Observable<any[]>{
    return this.http.get<any[]>(`${this.API}setting`);
  }

  public postSetting(setting: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.API}setting`, setting);
  }

  public putSetting(client: any): Observable<any[]> {
    return this.http.put<any[]>(`${this.API}setting`, client);
  }

  public deleteSetting(id: string): Observable<any[]> {
    // return this.http.delete<Setting[]>(`${this.API}setting/${id}`);
    return this.http.delete<any[]>(`${this.API}setting`);
  }

}
