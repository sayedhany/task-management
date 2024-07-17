import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../../../token.service';
import { createTask } from '../models/models';
import { environment } from 'projects/admin/src/environments/environment';
const URL = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}
  getAllTasks() {
    let headers = new HttpHeaders();
    return this.http.get(`${URL}tasks/all-tasks`, { headers });
  }
  createTask(data: createTask) {
    return this.http.post(`${URL}tasks/add-task`, data);
  }
  deleteTask(id: any) {
    return this.http.delete(`${URL}tasks/delete-task/${id}`);
  }
  updateTask(data: any, id: any) {
    return this.http.put(`${URL}tasks/edit-task/` + id, data);
  }
}
