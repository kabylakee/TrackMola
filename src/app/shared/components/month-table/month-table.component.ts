import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-table',
  templateUrl: './month-table.component.html',
  styleUrls: ['./month-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
