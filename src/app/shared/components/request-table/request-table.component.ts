import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'app-request-table',
	templateUrl: './request-table.component.html',
	styleUrls: ['./request-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestTableComponent {}
