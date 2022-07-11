import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterPaths} from 'src/app/entities/enums/router.enum';

@Component({
	selector: 'app-statistic',
	templateUrl: './statistic.component.html',
	styleUrls: ['./statistic.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticComponent {
	public readonly title =
		RouterPaths.Statistic.charAt(0).toUpperCase() + RouterPaths.Statistic.slice(1);
}
