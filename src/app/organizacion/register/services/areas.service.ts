import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Areas, Personas } from '../../interface/organizacion.interface';

@Injectable({
  providedIn: 'root',
})
export class AreaService {
  private apiUrl = 'http://localhost:3000/areas'; // URL del backend para áreas
  private personasUrl = 'http://localhost:3000/personas'; // URL del backend para personas

  constructor(private http: HttpClient) {}

  // Método para obtener las áreas
  getAreas(): Observable<Areas[]> {
    return this.http.get<Areas[]>(this.apiUrl);
  }

  // Método para obtener las personas
  getPersonas(): Observable<Personas[]> {
    return this.http.get<Personas[]>(this.personasUrl);
  }
}
