import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FotosResponse } from '../models/foto';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  constructor(private http: HttpClient) {}

  public getFotos(search: string = 'valencia'): Observable<FotosResponse> {
    return this.http.get<FotosResponse>(
      `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=kdbTYS10B0bFv-Ycqo1CNnJu1O_dHNjyXqkPir0j1wE&access_key=BTcQY-lZN9g36D5ogRVpuOG36iHzQRt2RvGtBgJ_JhQ`
    );
  }
}
