import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://backendporfoliocas.herokuapp.com/personas/';

  constructor(private http: HttpClient) { }

  public list(): Observable<persona[]> {
    return this.http.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona> {
    return this.http.get<persona>(this.URL + `detail/${id}`);
  }

  public save(Persona: persona): Observable<any> {
    return this.http.post<any>(this.URL + 'create', Persona);
  }

  public update(id: number, Persona: persona): Observable<any> {
    return this.http.put<any>(this.URL + `update/${id}`, Persona);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
