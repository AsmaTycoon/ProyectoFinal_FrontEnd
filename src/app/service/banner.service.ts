import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  URL = 'https://backendporfoliocas.herokuapp.com/banner/'
  constructor(private httpCliente: HttpClient) { }

  public list():Observable<Banner[]>{
    return this.httpCliente.get<Banner[]>(this.URL + 'lista');
  }

  public detail(id: number):Observable<Banner>{
    return this.httpCliente.get<Banner>(this.URL + `detail/${id}`);
  }

  public save(banner: Banner): Observable<any>{
    return this.httpCliente.post<any>(this.URL + 'create', banner);
  }

  public update(id: number, banner: Banner): Observable<any>{
    return this.httpCliente.put<any>(this.URL + `update/${id}`, banner);
  }

  public delete(id: number):Observable<any>{
    return this.httpCliente.delete<any>(this.URL + `delete/${id}`);
  }
}
