import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FotosResponse } from '../models/foto';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  private search: string;
  private page: number;

  constructor(private http: HttpClient) {
    this.search = 'valencia';
    this.page = 1;
  }

  public getFotos(search: string | undefined): Observable<FotosResponse> {
    if (search) this.search = search;
    this.page = 1;
    return this.http.get<FotosResponse>(
      `https://api.unsplash.com/search/photos?page=1&query=${this.search}&client_id=kdbTYS10B0bFv-Ycqo1CNnJu1O_dHNjyXqkPir0j1wE&access_key=BTcQY-lZN9g36D5ogRVpuOG36iHzQRt2RvGtBgJ_JhQ`
    );
  }

  public moreFotos() {
    this.page++;
    return this.http.get<FotosResponse>(
      `https://api.unsplash.com/search/photos?page=1&query=${this.search}&page=${this.page}&client_id=kdbTYS10B0bFv-Ycqo1CNnJu1O_dHNjyXqkPir0j1wE&access_key=BTcQY-lZN9g36D5ogRVpuOG36iHzQRt2RvGtBgJ_JhQ`
    );
  }
}
