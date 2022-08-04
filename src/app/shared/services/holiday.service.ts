import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HOLIDAYS_MOCK} from 'src/app/entities/constants/holidays.constant';
import {IHoliday} from 'src/app/entities/interfaces/holiday.interface';

@Injectable({
	providedIn: 'root',
})
export class HolidayService {
	public getHolidays(date: Date): Observable<IHoliday[]> {
		const holidays = HOLIDAYS_MOCK.filter(
			(holiday) =>
				holiday.date.getFullYear() === date.getFullYear() &&
				holiday.date.getMonth() === date.getMonth(),
		);

		return of(holidays);
	}
}
