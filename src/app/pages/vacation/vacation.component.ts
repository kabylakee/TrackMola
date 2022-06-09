import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VacationComponent {

  constructor() { }

}
