import { Component, Input } from '@angular/core';  //without signal
// import { Component, computed, input } from '@angular/core'; //with signal

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  //without signal
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;


  //with signal
  // avatar = input.required<string>();
  // name = input.required<string>();

  //with signal
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  //without signal
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() { }
}