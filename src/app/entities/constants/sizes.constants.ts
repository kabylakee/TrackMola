import {Size} from '../enums/size.enum';
import {AssociativeObject} from '../interfaces/associative-object.interface';
import {ISizeConfig} from '../interfaces/size-config.interface';

export const SIZES_CONFIG: AssociativeObject<ISizeConfig> = {
	[Size.S]: {
		height: 0.75,
		width: 1,
	},
	[Size.M]: {
		height: 1.125,
		width: 1.5,
	},
	[Size.L]: {
		height: 1.5,
		width: 2,
	},
	[Size.Xl]: {
		height: 3,
		width: 4,
	},
};
