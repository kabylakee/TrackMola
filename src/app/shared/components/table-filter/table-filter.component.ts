import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import {TOGGLE} from 'src/app/entities/constants/period.constants';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {Period} from 'src/app/entities/enums/period.enum';
import {IProject} from 'src/app/entities/interfaces/project.interface';
import {IViewPeriod} from 'src/app/entities/interfaces/view-period.interface';
import {IHours} from '../../../entities/interfaces/hours.interface';
import {DEFAULT_TIME} from '../../../entities/constants/hours.constants';
import {IFilter} from 'src/app/entities/interfaces/filter.interface';
import {TaskService} from '../../services/task.service';
import {Observable} from 'rxjs';
import {IOptionInterface} from '../../../entities/interfaces/option.interface';

@Component({
	selector: 'app-table-filter',
	templateUrl: './table-filter.component.html',
	styleUrls: ['./table-filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFilterComponent implements OnInit {
	@Input() public sumTime: IHours = DEFAULT_TIME;

	@Output() public selectedFilters = new EventEmitter<IFilter>();
	@Output() searchValueChange = new EventEmitter<string>();
	@Output() actionHanding = new EventEmitter<IOptionInterface>();
	@Output() changeDate = new EventEmitter();

	public readonly toggleConfig: IViewPeriod<Period>[] = TOGGLE;
	public periodRange: Period;
	public projects: IProject[] = Object.values(PROJECT_MOCK);
	public isDisabled$: Observable<boolean>;

	constructor(private taskService: TaskService) {}

	ngOnInit() {
		this.isDisabled$ = this.taskService.getDisabledOptionBtn();
	}

	public changeDatePicker(element: Period): void {
		this.periodRange = element;
	}

	public emitFilters(filters: IFilter): void {
		this.selectedFilters.emit(filters);
	}
}
