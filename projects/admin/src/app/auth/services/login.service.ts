import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../models/models';
import { environment } from 'projects/admin/src/environments/environment';
const URL = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(data: login) {
    return this.http.post<any>(`${URL}auth/login`, data);
  }
}