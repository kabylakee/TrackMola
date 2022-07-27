import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IViewPeriod} from '../../../entities/interfaces/view-period.interface';

@Component({
	selector: 'app-page-tabs',
	templateUrl: './page-tabs.component.html',
	styleUrls: ['./page-tabs.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTabsComponent<T> {
	@Input() config: IViewPeriod<T>[] = [];
	@Input() tab: T;

	@Output() changeTabValue = new EventEmitter<T>();
}
