import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Modules/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  checklogin: BehaviorSubject<boolean>

  constructor(private httpClientUser: HttpClient) {

    this.checklogin = new BehaviorSubject<boolean>(this.local)

  }
  getAllUsers(): Observable<User[]> {
    return this.httpClientUser.get<User[]>('http://localhost:3000/user')
  }

  addUser(user: User): Observable<User> {
    return this.httpClientUser.post<User>('http://localhost:3000/user', user)
  }

  getUserByID(id: string): Observable<User> {
    return this.httpClientUser.get<User>('http://localhost:3000/user?id=' + id)
  }

  getUserloging(email: string, password: string): Observable<User[]> {

    // console.log(email, password)
    return this.httpClientUser.get<User[]>(`http://localhost:3000/user?email=${email}&password=${password}`)

  }
  get local() {
    return (localStorage.getItem('userId')) ? true : false
  }

}
