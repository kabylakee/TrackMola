import {IHoliday} from './holiday.interface';

export interface IAdminCalendarItem {
	date: Date;
	disabled: boolean;
	info?: IHoliday;
}
