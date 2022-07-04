import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Status} from 'src/app/entities/enums/status.enum';
import {TimeFilter} from 'src/app/entities/enums/timeFilter.enum';

@Component({
	selector: 'app-report-filter',
	templateUrl: './report-filter.component.html',
	styleUrls: ['./report-filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportFilterComponent {
	public readonly statuses_ = Object.values(Status);
	public readonly overtime_ = Object.values(TimeFilter);
}
