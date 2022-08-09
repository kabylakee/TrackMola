import {DayTypeEnum} from '../enums/day-type.enum';
import {IHoliday} from '../interfaces/holiday.interface';
import {CountryEnum} from '../enums/country.enum';

export const HOLIDAYS_MOCK: IHoliday[] = [
	{
		dayType: DayTypeEnum.WorkDay,
		date: new Date(2022, 7, 23),
		country: CountryEnum.Russia,
	},
	{
		dayType: DayTypeEnum.WorkDay,
		date: new Date(2022, 7, 23),
		country: CountryEnum.Belarus,
	},
	{
		dayType: DayTypeEnum.Holiday,
		date: new Date(2022, 7, 5),
		holidayName: 'Radunytsya',
		country: CountryEnum.Ukraine,
	},
];
