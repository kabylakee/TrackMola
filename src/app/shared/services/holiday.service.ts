import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HOLIDAYS_MOCK} from 'src/app/entities/constants/holidays.constant';
import {IHoliday} from 'src/app/entities/interfaces/holiday.interface';
import {LocalStorageService} from './localStorage.service';
import {CountryEnum} from '../../entities/enums/country.enum';
import {DayTypeEnum} from 'src/app/entities/enums/day-type.enum';

@Injectable({
	providedIn: 'root',
})
export class HolidayService {
	public holidays$: BehaviorSubject<IHoliday[]> = new BehaviorSubject<IHoliday[]>([]);
	public HOLIDAYS_KEY_DATA: string = 'HOLIDAYS_KEY_DATA';

	constructor(private localStorageService: LocalStorageService) {
		this.checkData();
	}

	public getHolidays(country: CountryEnum, date: Date = new Date(0)): Observable<IHoliday[]> {
		const arr = this.holidays$.value.filter((holiday) => {
			return (
				holiday.date.getFullYear() === date.getFullYear() &&
				holiday.date.getMonth() === date.getMonth() &&
				holiday.country === country
			);
		});
		return of(arr);
	}

	public checkData(): void {
		const localStorageData = this.localStorageService.getData(this.HOLIDAYS_KEY_DATA);
		if (!localStorageData) {
			this.localStorageService.setData(this.HOLIDAYS_KEY_DATA, HOLIDAYS_MOCK);
			this.holidays$.next(HOLIDAYS_MOCK);
		} else {
			this.mapData(localStorageData as IHoliday[]);
			this.holidays$.next(localStorageData as IHoliday[]);
		}
	}

	private mapData(data: IHoliday[]): void {
		data.forEach((holiday) => {
			holiday.date = new Date(holiday.date as Date);
		});
	}

	public createHoliday(data: IHoliday[] | void): void {
		if (data) {
			this.holidays$.next(this.holidays$.value.concat(data));
			const arr = this.holidays$.value;
			this.localStorageService.setData(this.HOLIDAYS_KEY_DATA, arr);
		}
	}

	public disabledWeekend(date: Date): boolean {
		return this.holidays$.value.some(
			(holiday) =>
				+holiday.date === +date &&
				holiday.country === CountryEnum.Belarus &&
				holiday.dayType === DayTypeEnum.Weekend,
		);
	}

	public isHoliday(date: Date): boolean {
		return this.holidays$.value.some(
			(holiday) =>
				+holiday.date === +date &&
				holiday.country === CountryEnum.Belarus &&
				holiday.dayType === DayTypeEnum.Holiday,
		);
	}
}
