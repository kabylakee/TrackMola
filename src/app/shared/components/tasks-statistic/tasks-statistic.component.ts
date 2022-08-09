import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';
import {DEFAULT_TIME, DEFAULT_WEEK_WORKTIME} from 'src/app/entities/constants/hours.constants';
import {IHours} from 'src/app/entities/interfaces/hours.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';

@Component({
	selector: 'app-tasks-statistic',
	templateUrl: './tasks-statistic.component.html',
	styleUrls: ['./tasks-statistic.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksStatisticComponent implements OnInit {
	@Input() tasks: ITask[];

	public chart: Chart;
	private statisticTasks: [string, number][] = [];
	public readonly weekNormalTime = DEFAULT_WEEK_WORKTIME;
	public sumTime: IHours = DEFAULT_TIME;

	public ngOnInit(): void {
		this.sumTime = {
			time: this.tasks.reduce((time, task) => (time += task.time), 0),
			overtime: this.tasks.reduce((overtime, task) => (overtime += task.overtime), 0),
		};
		this.tasksToStatistic = this.tasks;
		this.chart = new Chart({
			chart: {
				type: 'column',
				height: 160,
			},
			title: {
				text: '',
			},
			xAxis: {
				type: 'category',
				labels: {
					rotation: -45,
					x: 8,
					style: {
						fontSize: '10px',
						lineHeight: '12px',
						color: '#9DA1BC',
					},
				},
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Hours',
					y: 20,
					style: {
						fontSize: '10px',
						lineHeight: '12px',
						color: '#9DA1BC',
					},
				},
			},
			tooltip: {
				headerFormat: '{point.key}',
				pointFormat: '',
			},
			credits: {
				enabled: false,
			},
			series: [
				{
					type: 'column',
					colorByPoint: true,
					colors: [
						'var(--holiday)',
						'var(--day-off)',
						'var(--yellow)',
						'var(--blue)',
						'var(--secondary-500)',
						'var(--secondary-200)',
						'var(--accent-700)',
						'var(--accent-500)',
						'var(--accent-300)',
						'var(--accent-200)',
						'var(--accent-100)',
						'var(--blue)',
						'var(--accent-50)',
					],
					data: this.statisticTasks,
					showInLegend: false,
					maxPointWidth: 24,
				},
			],
		});
	}

	private set tasksToStatistic(tasks: ITask[]) {
		tasks.forEach((task) => {
			this.statisticTasks.push([task.title, task.time]);
		});
	}
}
