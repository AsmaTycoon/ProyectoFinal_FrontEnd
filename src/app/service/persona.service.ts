import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://backendporfoliocas.herokuapp.com/personas/'

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL + 'traer');
  }

  public findPersona(id: number): Observable<persona>{
    return this.http.get<persona>(this.URL+ `traer/perfil/${id}`);
  }

  public createPersona(Persona: persona): Observable<any>{
    return this.http.post<any>(this.URL + 'crear', Persona);
  }

  public editPersona(id: number, Persona: persona): Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, Persona);
  }

  public deletePersona(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}
