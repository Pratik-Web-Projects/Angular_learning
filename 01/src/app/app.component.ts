import { Component } from '@angular/core';
import { Header } from './header/header';
import { User } from './users/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User, Tasks, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId: string = ''
  createTask: boolean = false;

    get selectedUser(){
      return this.users.find((u) => u.id === this.selectedUserId);
    }

    onSelectUser(id: string) {
      this.selectedUserId = id;
      this.createTask = false;
  }

  // onCreateTask(){
  //   console.log('task creation process start');
  //   this.createTask = true;
  // }
}
