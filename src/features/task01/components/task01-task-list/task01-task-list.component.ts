import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-task01-task-list',
  imports: [
    JsonPipe
  ],
  templateUrl: './task01-task-list.component.html',
  styleUrl: './task01-task-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task01TaskListComponent {
  readonly tasks = input<string[]>([]);
}
