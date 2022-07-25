import {DayTypeEnum} from '../enums/day-type.enum';
import {AssociativeObject} from '../interfaces/associative-object.interface';
import {IColor} from '../interfaces/color.interface';

export const COLOR_CONSTANTS: AssociativeObject<IColor> = {
	[DayTypeEnum.DayOff]: {
		standard: 'rgba(125, 214, 165, 1)',
		transparent: 'rgba(125, 214, 165, 0.2)',
	},
	[DayTypeEnum.Holiday]: {
		standard: 'rgba(88, 174, 223, 1)',
		transparent: 'rgba(88, 174, 223, 0.2)',
	},
	[DayTypeEnum.Unapproved]: {
		standard: 'rgba(201, 203, 214, 1)',
		transparent: 'rgba(201, 203, 214, 0.2)',
	},
};
