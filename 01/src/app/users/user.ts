import { Component, computed, EventEmitter, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { UserType } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
    @Input({required: true}) user!: UserType;
    @Input({required: true}) selected! : boolean;
    // @Output() select = new EventEmitter<string>(); 

    select = output<string>();

     get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

    onUserSelected(){
      this.select.emit(this.user.id);
    }
}
