import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Método para registrar usuario
  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/personas`, userData);
  }

  // Método para obtener áreas
  getAreas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/areas`);
  }
}
