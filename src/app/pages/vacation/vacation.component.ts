import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VacationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
