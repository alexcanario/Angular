import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // @Input() name?: string;
  // @Input() name: string | undefined;
  name = input<string | undefined>();
}
