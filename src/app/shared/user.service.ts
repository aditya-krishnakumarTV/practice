import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  localUser: User[] = [];

  addUser(user: User) {
    this.localUser.push(user);
  }

  getUser() {
    return this.localUser;
  }
}
