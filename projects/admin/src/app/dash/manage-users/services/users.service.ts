import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/admin/src/environments/environment';
const URL = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get(URL + 'auth/users');
  }
  deleteUsers(id: string) {
    return this.http.delete(URL + 'auth/user/' + id);
  }
  changeStatus(model: any) {
    return this.http.put(URL + 'auth/user-status', model);
  }
}
