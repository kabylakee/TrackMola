import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeyValue} from '@angular/common';

import {RouterPaths} from 'src/app/entities/enums/router.enum';

@Component({
	selector: 'app-left-panel',
	templateUrl: './left-panel.component.html',
	styleUrls: [
		'./styles/left-panel.component.scss',
		'./styles/left-panel-icons.component.scss',
		'./styles/left-panel-small.component.scss',
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftPanelComponent {
	public paths = RouterPaths;

	public isPanelSmall = true;

	public originalOrderComparator = (
		a: KeyValue<string, string>,
		b: KeyValue<string, string>,
	): number => {
		return 0;
	};

	public switchMenuView() {
		this.isPanelSmall = !this.isPanelSmall;
	}
}
