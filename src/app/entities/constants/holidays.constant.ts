import {DayTypeEnum} from '../enums/day-type.enum';
import {IHoliday} from '../interfaces/holiday.interface';
import {CountryEnum} from '../enums/country.enum';

export const HOLIDAYS_MOCK: IHoliday[] = [
	{
		dayType: DayTypeEnum.Holiday,
		date: new Date(2022, 6, 1),
		holidayName: 'Radunytsya',
		country: CountryEnum.Belarus,
	},
	{
		dayType: DayTypeEnum.Weekend,
		date: new Date(2022, 6, 4),
		country: CountryEnum.Belarus,
	},
	{
		dayType: DayTypeEnum.Holiday,
		date: new Date(2022, 6, 5),
		holidayName: 'Radunytsya',
		country: CountryEnum.Belarus,
	},
	{
		dayType: DayTypeEnum.HalfDay,
		date: new Date(2022, 6, 15),
		workingHours: 7,
		country: CountryEnum.Belarus,
	},
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
