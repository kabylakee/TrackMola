import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'app-input-search',
	templateUrl: './input-search.component.html',
	styleUrls: ['./input-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSearchComponent {
	@Output() valueChange = new EventEmitter<string>();
	public value: string = '';

	public onChangeValue(str: string): void {
		console.log(str);
		this.valueChange.emit(str);
	}
}
