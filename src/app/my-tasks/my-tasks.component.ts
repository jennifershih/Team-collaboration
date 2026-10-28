import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./my-tasks.component.scss'],
})
export class MyTasksComponent {}
