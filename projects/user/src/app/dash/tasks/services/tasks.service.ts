import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/user/environments/environment';
const API = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}
  userTasks(id: string) {
    // return this.http.get(environment.baseApi+ '/user-tasks/'+userId , {params})
    return this.http.get(`${API}tasks/user-tasks/${id}`);
  }
  completeTask(model: object) {
    return this.http.put(`${API}tasks/complete`, model);
  }
  moveToInProgress(model: object) {
    return this.http.put(`${API}tasks/moveToInProgress`, model);
  }
  taskDetails(id: string) {
    return this.http.get(API + 'tasks/task/' + id);
  }
}
