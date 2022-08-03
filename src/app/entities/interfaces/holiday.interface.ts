import {DayTypeEnum} from '../enums/day-type.enum';
import {CountryEnum} from '../enums/country.enum';

export interface IHoliday {
	dayType: DayTypeEnum;
	date: Date | Set<Date>;
	holidayName?: string;
	workingHours?: number;
	country: CountryEnum;
}
