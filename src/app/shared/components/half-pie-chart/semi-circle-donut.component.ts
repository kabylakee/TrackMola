import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Chart} from 'angular-highcharts';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {IProject} from 'src/app/entities/interfaces/project.interface';

@Component({
	selector: 'app-semi-circle-donut',
	templateUrl: './semi-circle-donut.component.html',
	styleUrls: ['./semi-circle-donut.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SemiCircleDonutComponent {
	public projectSource: IProject[] = Object.values(PROJECT_MOCK);

	public chart = new Chart({
		chart: {
			plotBackgroundColor: '',
			plotBorderWidth: 0,
			plotShadow: false,
			height: 150,
			marginBottom: -24,
			spacingRight: 24,
		},
		title: {
			text: '',
		},
		credits: {
			enabled: false,
		},
		tooltip: {
			valueSuffix: '%',
			pointFormat: '<b>{point.percentage:.1f}%</b>',
		},
		accessibility: {
			point: {
				valueSuffix: '%',
			},
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			itemStyle: {
				color: 'var(--light-black)',
				fontFamily: 'Inter',
				fontWeight: '400',
				fontSize: 'var(--font-size-xs)',
			},
			itemMarginBottom: 12.5,
			margin: 16,
			squareSymbol: true,
			symbolRadius: 3,
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					style: {
						fontWeight: '400',
						color: 'white',
					},
				},
				showInLegend: true,
				startAngle: -90,
				endAngle: 90,
				center: ['50%', '75%'],
				size: '110%',
			},
		},
		series: [
			{
				type: 'pie',
				name: '',
				innerSize: '45%',
				dataLabels: {
					enabled: true,
					style: {
						fontWeight: '400',
						fontFamily: 'Inter',
						color: 'var(--light-black)',
						textOutline: 'none',
					},
				},
				colors: ['var(--accent-300)', 'var(--blue)', 'var(--secondary-200)', 'var(--yellow)'],
				data: [
					[this.projectSource[0].title, this.projectSource[0].percentage],
					[this.projectSource[1].title, this.projectSource[1].percentage],
					[this.projectSource[2].title, this.projectSource[2].percentage],
					[this.projectSource[3].title, this.projectSource[3].percentage],
				],
			},
		],
	});
}
