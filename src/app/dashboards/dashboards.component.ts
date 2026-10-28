import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./dashboards.component.scss'],
})
export class DashboardsComponent {}
