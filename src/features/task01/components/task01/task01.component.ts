import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Task01ChildComponent} from '../task01-child/task01-child.component';
import {Task01TaskListComponent} from '../task01-task-list/task01-task-list.component';

@Component({
  selector: 'app-task01',
  imports: [
    Task01ChildComponent,
    Task01TaskListComponent
  ],
  templateUrl: './task01.component.html',
  styleUrl: './task01.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task01Component {
  public tasks: string[] = [];

  public taskExecuted(): void {
    this.tasks.push(new Date().toISOString());
  }
}
