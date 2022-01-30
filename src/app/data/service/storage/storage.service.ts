import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { Storage } from 'src/app/data/schema/storage/storage.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public API: string = environment.api;
  public StorageData: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  public add_edit = 0;
  public itemStorage: Storage = {
    id: '',
    name: '',
    description: '',
    img: '',
    cont: 0,
    price: 0,
  };
  
  constructor(
    private http: HttpClient
  ) { }

  public getStorage(): Observable<any[]>{
    return this.http.get<any[]>(`${this.API}storage`);
  }

  public postStorage(storage: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.API}storage`, storage);
  }

  public putStorage(storage: Storage): Observable<Storage[]> {
    return this.http.put<Storage[]>(`${this.API}storage`, storage);
  }

  public deleteStorage(id: string): Observable<Storage[]> {
    // return this.http.delete<Storage[]>(`${this.API}storage/${id}`);
    return this.http.delete<Storage[]>(`${this.API}storage`);
  }
}
