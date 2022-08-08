import {Injectable} from '@angular/core';
import {Workbook} from 'exceljs';
import * as fs from 'file-saver';
import {IExcelData} from 'src/app/entities/interfaces/excel-data.interface';

const EXCEL_TYPE =
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
	providedIn: 'root',
})
export class ExcelService {
	private fgColor = 'FFFFFF00';
	private bgColor = 'FF0000FF';
	private fontSize = 12;
	private minCellLength = 20;

	public exportAsExcelFile(
		excelConfig: string[],
		excelData: IExcelData[],
		excelFileName: string,
		sheetName: string,
	) {
		const data = excelData;

		const workbook = new Workbook();
		workbook.creator = 'NewUser';
		workbook.lastModifiedBy = 'NewUser';
		workbook.created = new Date();
		workbook.modified = new Date();
		const worksheet = workbook.addWorksheet(sheetName);

		// Get all titles
		const headerRow = worksheet.addRow(excelConfig);

		headerRow.eachCell((cell, index) => {
			cell.fill = {
				type: 'pattern',
				pattern: 'solid',
				fgColor: {argb: this.fgColor},
				bgColor: {argb: this.bgColor},
			};
			cell.border = {
				top: {style: 'thin'},
				left: {style: 'thin'},
				bottom: {style: 'thin'},
				right: {style: 'thin'},
			};
			cell.font = {size: this.fontSize, bold: true};

			worksheet.getColumn(index).width =
				excelConfig[index - 1].length < this.minCellLength
					? this.minCellLength
					: excelConfig[index - 1].length;
		});

		// Get all columns
		let columnsArray: string[];
		for (const key in excelData) {
			if (excelData.hasOwnProperty(key)) {
				columnsArray = Object.keys(excelData[key]);
			}
		}

		// Add Data and Conditional Formating
		data.forEach((row: IExcelData) => {
			const eachRow: string[] = [];
			columnsArray.forEach((column: string) => {
				eachRow.push(row[column as keyof IExcelData]!);
			});
			worksheet.addRow(eachRow);
		});

		// Save Excel File
		workbook.xlsx.writeBuffer().then((dataAB: ArrayBuffer) => {
			const blob = new Blob([dataAB], {type: EXCEL_TYPE});
			fs.saveAs(blob, excelFileName + EXCEL_EXTENSION);
		});
	}
}
