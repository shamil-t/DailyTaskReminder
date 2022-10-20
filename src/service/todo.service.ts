import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  _API = API + '/todo';
  constructor(private http: HttpClient) {}

  getAllTodo(): Observable<Task[]> {
    return this.http.get<Task[]>(this._API);
  }

  addTodo(data: Task) {
    return this.http.post(this._API, { todo: data });
  }
}
