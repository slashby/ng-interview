import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task02Component } from './task02.component';

describe('Task02Component', () => {
  let component: Task02Component;
  let fixture: ComponentFixture<Task02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
