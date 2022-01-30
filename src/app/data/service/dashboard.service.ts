import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Storage } from 'src/app/data/schema/storage/storage.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  storage: Storage[] = [];

  public API: string = environment.api;
  
  constructor(
    private http: HttpClient
  ) { }

  public getStorage(): Observable<Storage[]>{
    return this.http.get<Storage[]>(`${this.API}storage`);
  }

}
