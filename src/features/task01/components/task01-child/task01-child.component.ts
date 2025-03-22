import {ChangeDetectionStrategy, Component, output} from '@angular/core';

@Component({
  selector: 'app-task01-child',
  imports: [],
  templateUrl: './task01-child.component.html',
  styleUrl: './task01-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task01ChildComponent {
  public status: string = "Init";

  public readonly taskExecuted = output<void>();

  public runTask(): void {
    setTimeout(() => {
      this.status = "Task completed";
    }, 1000);

    this.taskExecuted.emit();
  }
}
