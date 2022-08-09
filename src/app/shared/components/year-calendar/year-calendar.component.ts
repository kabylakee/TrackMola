import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	SimpleChanges,
} from '@angular/core';
import {DayTypeEnum} from 'src/app/entities/enums/day-type.enum';
import {YEARCALENDAR} from 'src/app/entities/constants/year-calendar.constatnts';
import {IYearCalendar} from 'src/app/entities/interfaces/calendar-year.interface';
import {VacationService} from '../../services/vacation.service';
import {IEmployee} from 'src/app/entities/interfaces/employee.interface';
import {EMPLOYEE_MOCK} from 'src/app/entities/constants/employee.mock';
import {IVacation} from 'src/app/entities/interfaces/vacation.interface';

@Component({
	selector: 'app-year-calendar',
	templateUrl: './year-calendar.component.html',
	styleUrls: ['./year-calendar.component.scss'],
	changeDetection: ChangeDetectionStrategy.Default,
})
export class YearCalendarComponent {
	@Input() datePickerDate: Date;
	public vacations: IVacation[] = [];
	public currentUser: IEmployee = EMPLOYEE_MOCK[0];

	constructor(private vacationService: VacationService, private cd: ChangeDetectorRef) {}

	public ngOnChanges(changes: SimpleChanges) {
		if (changes.datePickerDate?.currentValue || changes.counter?.currentValue) {
			this.vacationService
				.getYearVacations(new Date(this.datePickerDate.getFullYear().toString()), this.currentUser)
				.subscribe((vacations) => (this.vacations = vacations));
		}
	}
	public calendars: IYearCalendar[] = YEARCALENDAR;
	public legendItems: DayTypeEnum[] = [DayTypeEnum.Vacation, DayTypeEnum.DayOff];
}
