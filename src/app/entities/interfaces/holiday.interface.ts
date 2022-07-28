import {DayTypeEnum} from '../enums/day-type.enum';

export interface IHoliday {
	dayType: DayTypeEnum;
	date: Date;
	holidayName?: string;
	workingHours?: number;
}
