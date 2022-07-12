import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'app-input-search',
	templateUrl: './input-search.component.html',
	styleUrls: ['./input-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSearchComponent {
	@Output() searchValueChange = new EventEmitter<string>();
	public value: string = '';
}
