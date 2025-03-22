import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task01ChildComponent } from './task01-child.component';

describe('Task01ChildComponent', () => {
  let component: Task01ChildComponent;
  let fixture: ComponentFixture<Task01ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task01ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task01ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
