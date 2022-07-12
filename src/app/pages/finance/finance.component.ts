import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterPaths} from 'src/app/entities/enums/router.enum';

@Component({
	selector: 'app-finance',
	templateUrl: './finance.component.html',
	styleUrls: ['./finance.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinanceComponent {
	public readonly title =
		RouterPaths.Finance.charAt(0).toUpperCase() + RouterPaths.Finance.slice(1);
}
