import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }


  add: User[] = [];

  


  addUsers(user: User)
  {
    this.add.push(user);
  }

  editUsers(index:number, data : User)
  {
    this.add[index].fname = data.fname;
    this.add[index].lname = data.lname;
    this.getUsers();

  }

  getUsers()
  {
    return this.add;
  }

}
