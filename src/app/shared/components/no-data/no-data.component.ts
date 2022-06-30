import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-no-data',
	templateUrl: './no-data.component.html',
	styleUrls: ['./no-data.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoDataComponent implements OnInit {
	@Input() type = 'inline';
	@Input() size = 'l';

	public widthRem: number;
	public heightRem: number;

	ngOnInit(): void {
		switch (this.size) {
			case 's':
				this.widthRem = 1;
				this.heightRem = 0.75;
				break;
			case 'm':
				this.widthRem = 1.5;
				this.heightRem = 1.125;
				break;
			case 'l':
				this.widthRem = 2;
				this.heightRem = 1.5;
				break;
			case 'xl':
				this.widthRem = 4;
				this.heightRem = 3;
				break;
			default:
				this.widthRem = 2;
				this.heightRem = 1.5;
		}
	}
}
