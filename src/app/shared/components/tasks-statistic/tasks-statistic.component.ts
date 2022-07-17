import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
	selector: 'app-tasks-statistic',
	templateUrl: './tasks-statistic.component.html',
	styleUrls: ['./tasks-statistic.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksStatisticComponent {
	public chart = new Chart({
		chart: {
			type: 'column',
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
				y: 40,
				style: {
					fontSize: '10px',
					lineHeight: '12px',
					color: '#9DA1BC',
				},
			},
		},
		tooltip: {
			enabled: false,
		},
		credits: {
			enabled: false,
		},
		series: [
			{
				type: 'column',
				colorByPoint: true,
				data: [['AMCN PSVOD', 4]],
				showInLegend: false,
				// dataLabels: {
				// 	enabled: true,
				// 	rotation: -90,
				// 	color: '#FFFFFF',
				// 	align: 'right',
				// 	format: '{point.y:.1f}', // one decimal
				// 	y: 10, // 10 pixels down from the top
				// 	style: {
				// 		fontSize: '13px',
				// 		fontFamily: 'Verdana, sans-serif',
				// 	},
				// },
			},
		],
	});
}
