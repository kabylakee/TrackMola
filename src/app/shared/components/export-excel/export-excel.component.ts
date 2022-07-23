import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IExcelData} from 'src/app/entities/interfaces/excel-data.interface';
import {ExcelService} from '../../services/excel.service';

@Component({
	selector: 'app-export-excel',
	templateUrl: './export-excel.component.html',
	styleUrls: ['./export-excel.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExportExcelComponent implements OnInit {
	excelConfig: string[] = [];
	excelData: IExcelData[] = [];

	constructor(public excelService: ExcelService) {}

	ngOnInit() {
		this.excelConfig = [
			'Project',
			'Deliverables',
			'Resourse',
			'N.Surname',
			'Percent',
			'Working hours per week',
			'hours',
		];
		this.excelData = [
			{
				project: 'PPM',
				deliverables: '{data_governants} - google flow prepare validation & mta_ssis configs',
				resourse: 'DWH',
				surname: 'Oleg Kotenko',
				percent: '20%',
				workingHours: '40',
				hours: '8',
			},
			{
				project: 'PPM',
				deliverables: '{data_governants} - google flow prepare validation & mta_ssis configs',
				resourse: 'DWH',
				surname: 'Oleg Kotenko',
				percent: '20%',
				workingHours: '40',
				hours: '8',
			},
		];
	}

	public export(): void {
		this.excelService.exportAsExcelFile(this.excelConfig, this.excelData, 'newFile', 'newSheet');
	}
}
