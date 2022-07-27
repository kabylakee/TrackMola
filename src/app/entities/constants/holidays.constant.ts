import {DayTypeEnum} from '../enums/day-type.enum';
import {IHoliday} from '../interfaces/holiday.interface';

export const HOLIDAYS_MOCK: IHoliday[] = [
	{
		dayType: DayTypeEnum.Holiday,
		date: new Date(2022, 6, 1),
		holidayName: 'Radunytsya',
	},
	{
		dayType: DayTypeEnum.Weekend,
		date: new Date(2022, 6, 4),
	},
	{
		dayType: DayTypeEnum.Holiday,
		date: new Date(2022, 6, 5),
		holidayName: 'Radunytsya',
	},
	{
		dayType: DayTypeEnum.HalfDay,
		date: new Date(2022, 6, 15),
		workingHours: 7,
	},
	{
		dayType: DayTypeEnum.WorkDay,
		date: new Date(2022, 6, 23),
	},
];
