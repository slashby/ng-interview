import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task01TaskListComponent } from './task01-task-list.component';

describe('Task01TaskListComponent', () => {
  let component: Task01TaskListComponent;
  let fixture: ComponentFixture<Task01TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task01TaskListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task01TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
