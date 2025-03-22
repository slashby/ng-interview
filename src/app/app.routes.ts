import { Routes } from '@angular/router';
import {Task01Component} from '../features/task01/components/task01/task01.component';
import {Task02Component} from '../features/task02/components/task02/task02.component';

export const routes: Routes = [
  {path: 'task01', component: Task01Component},
  {path: 'task02', component: Task02Component},
];
