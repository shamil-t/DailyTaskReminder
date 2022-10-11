import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';
import { Login } from '../types/login.type';
import { UserResponse } from '../types/user_response.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  USER_API: string = API + 'user'
  constructor(private http: HttpClient) { }

  login(data: Login): Observable<{ user: UserResponse } | { password: null } | { email: null }> {
    return this.http.post<{ user: UserResponse }>(this.USER_API + '/login', data);
  }
}
