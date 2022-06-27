import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hours-card',
  templateUrl: './hours-card.component.html',
  styleUrls: ['./hours-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoursCardComponent implements OnChanges {
  @Input()
  totalHours = 0;

  public hourColor = 'red';

  public hourCards = [{ title: 'Total Hours', hours: 0 }];

  private readonly normalHoursCount = 8;

  ngOnChanges() {
    switch (true) {
      case this.totalHours < this.normalHoursCount:
        this.hourColor = 'red';
        this.hourCards = [{ title: 'Total Hours', hours: this.totalHours }];
        break;
      case this.totalHours === this.normalHoursCount:
        this.hourColor = 'green';
        this.hourCards = [{ title: 'Total Hours', hours: this.totalHours }];
        break;
      case this.totalHours > this.normalHoursCount:
        this.hourColor = 'orange';
        this.hourCards = [
          { title: 'Total Hours', hours: this.totalHours },
          { title: 'Overtime Hours', hours: this.totalHours - this.normalHoursCount },
        ];
        break;
      default:
        break;
    }
  }
}
