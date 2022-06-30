import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {SIZES_CONFIG} from 'src/app/entities/constants/sizes.constants';
import {Size} from 'src/app/entities/enums/size.enum';
import {Type} from 'src/app/entities/enums/type.enum';
import {ISizeConfig} from 'src/app/entities/interfaces/size-config.interface';

@Component({
	selector: 'app-no-data',
	templateUrl: './no-data.component.html',
	styleUrls: ['./no-data.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoDataComponent implements OnChanges {
	@Input() type: Type = Type.Inline;
	@Input() size: Size = Size.L;

	public sizeRem: ISizeConfig = SIZES_CONFIG[this.size];

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.size?.currentValue) this.sizeRem = SIZES_CONFIG[this.size];
	}
}
