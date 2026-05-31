import { Component, computed, signal, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(DUMMY_USERS.length * Math.random());

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
    // selectedUser = DUMMY_USERS[randomIndex];
    selectedUser = signal(DUMMY_USERS[randomIndex]);
    imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar);
    
    avatar = input<string>();
    // avatar = input.required<string>();
    name = input<string>(); 

    // get imagePath(){
    //   return 'assets/users/' + this.selectedUser.avatar;
    // }

    onUserSelected(){
      const randomIndex = Math.floor(DUMMY_USERS.length * Math.random());
      // this.selectedUser = DUMMY_USERS[randomIndex]; 
      this.selectedUser.set(DUMMY_USERS[randomIndex]);
    }
}
