import {Size} from '../enums/size.enum';
import {AssociativeObject} from '../interfaces/associative-object.interface';
import {ISizeConfig} from '../interfaces/size-config.interface';

export const SIZES_CONFIG: AssociativeObject<ISizeConfig> = {
	[Size.S]: {
		height: 1.5,
		width: 2,
	},
	[Size.M]: {
		height: 3,
		width: 4,
	},
	[Size.L]: {
		height: 4.5,
		width: 6,
	},
	[Size.Xl]: {
		height: 6.75,
		width: 9,
	},
};
