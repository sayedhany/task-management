import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}
  getToken() {
    return localStorage.getItem('token');
  }
  setToken(value: string) {
    localStorage.setItem('token', value);
  }
  removeToken() {
    localStorage.removeItem('token');
  }
}
