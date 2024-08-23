import { Component, EventEmitter, Input, Output, input, output, computed } from '@angular/core';  //without signal
import { RequiredValidator } from '@angular/forms';
// import { Component, computed, input } from '@angular/core'; //withs signal

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  //without signal
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() selectUserEvent = new EventEmitter<string>();

  //with signal
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  // @Input({ required: true }) user!: {
  //   id: string;
  //   name: string;
  //   avatar: string;
  // }

  user = input.required<User>();
  selectUserEvent = output<string>();

  //with signal
  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  });

  //without signal
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  onUserBtnClick() {
    this.selectUserEvent.emit(this.user().id);
  }
}