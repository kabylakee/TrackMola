import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
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
export class NoDataComponent implements OnInit{
	@Input() type: string = Type.Inline;
	@Input() size: string = Size.L;
	
	public sizeRem: ISizeConfig = SIZES_CONFIG[Size.L];
	ngOnInit(): void {
		this.sizeRem = SIZES_CONFIG[this.size];
	}
}
