import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-day-table',
	templateUrl: './day-table.component.html',
	styleUrls: ['./day-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayTableComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
