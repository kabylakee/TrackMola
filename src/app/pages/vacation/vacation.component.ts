import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {VacationService} from 'src/app/shared/services/vacation.service';
import {takeWhile} from 'rxjs';
import {IVacation} from 'src/app/entities/interfaces/vacation.interface';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {IVacationFilter} from 'src/app/entities/interfaces/vacation-filter.interface';

@Component({
	selector: 'app-vacation',
	templateUrl: './vacation.component.html',
	styleUrls: ['./vacation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationComponent implements OnInit {
	@Input() changeDate: Date;
	@Input() sendRequest: IVacation;

	public selectedDate: Date = new Date();
	public readonly title =
		RouterPaths.Vacation.charAt(0).toUpperCase() + RouterPaths.Vacation.slice(1);
	public isSub = true;
	public vacations: IVacation[] = [];
	public filters: IVacationFilter = {project: PROJECT_MOCK[0].title, department: 'Select all'};

	constructor(private vacationService: VacationService) {}

	ngOnInit(): void {
		this.getMonthVacations();
	}

	public onChangeDate(event: Date): void {
		this.selectedDate = event;
		this.getMonthVacations();
	}
	public onChangeFilters(event: IVacationFilter): void {
		this.filters = event;
		this.getMonthVacations();
	}

	private getMonthVacations(): void {
		this.vacationService
			.getMonthVacations(
				new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1),
				this.filters,
			)
			.pipe(takeWhile(() => this.isSub))
			.subscribe((vacations) => (this.vacations = vacations));
	}

	ngOnDestroy(): void {
		this.isSub = false;
	}
}
