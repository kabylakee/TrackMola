import {Injectable} from '@angular/core';
import {Workbook} from 'exceljs';
import * as fs from 'file-saver';

const EXCEL_TYPE =
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
	providedIn: 'root',
})
export class ExcelService {
	// public exportAsExcelFile(
	// 	headingArray: string[],
	// 	json: JSON[],
	// 	excelFileName: string,
	// 	sheetName: string,
	// ) {
	// 	const data = json;

	// 	const workbook = new Workbook();
	// 	workbook.creator = 'NewUser';
	// 	workbook.lastModifiedBy = 'NewUser';
	// 	workbook.created = new Date();
	// 	workbook.modified = new Date();
	// 	const worksheet = workbook.addWorksheet(sheetName);

	// 	const headerRow = worksheet.addRow(headingArray);

	// 	headerRow.eachCell((cell, index) => {
	// 		cell.fill = {
	// 			type: 'pattern',
	// 			pattern: 'solid',
	// 			fgColor: {argb: 'FFFFFF00'},
	// 			bgColor: {argb: 'FF0000FF'},
	// 		};
	// 		cell.border = {
	// 			top: {style: 'thin'},
	// 			left: {style: 'thin'},
	// 			bottom: {style: 'thin'},
	// 			right: {style: 'thin'},
	// 		};
	// 		cell.font = {size: 12, bold: true};

	// 		worksheet.getColumn(index).width =
	// 			headingArray[index - 1].length < 20 ? 20 : headingArray[index - 1].length;
	// 	});

	// 	// Get all columns from JSON
	// 	let columnsArray: any[];
	// 	for (const key in json) {
	// 		if (json.hasOwnProperty(key)) {
	// 			columnsArray = Object.keys(json[key]);
	// 		}
	// 	}

	// 	// Add Data and Conditional Formating
	// 	data.forEach((element: any) => {
	// 		const eachRow: any[] = [];
	// 		columnsArray.forEach((column) => {
	// 			eachRow.push(element[column]);
	// 		});

	// 		if (element.isDeleted === 'Y') {
	// 			const deletedRow = worksheet.addRow(eachRow);
	// 			deletedRow.eachCell((cell) => {
	// 				cell.font = {name: 'Calibri', family: 4, size: 11, bold: false, strike: true};
	// 			});
	// 		} else {
	// 			worksheet.addRow(eachRow);
	// 		}
	// 	});

	// 	// Save Excel File
	// 	workbook.xlsx.writeBuffer().then((dataAB: ArrayBuffer) => {
	// 		const blob = new Blob([dataAB], {type: EXCEL_TYPE});
	// 		fs.saveAs(blob, excelFileName + EXCEL_EXTENSION);
	// 	});
	// }

	export(): void {
		const workbook = new Workbook();
		workbook.creator = 'NewUser';
		workbook.lastModifiedBy = 'NewUser';
		workbook.created = new Date();
		workbook.modified = new Date();
		const worksheet = workbook.addWorksheet('sheetName');

		worksheet.addRow('AAAAAAAA');

		workbook.xlsx.writeBuffer().then((dataAB: ArrayBuffer) => {
			const blob = new Blob([dataAB], {type: EXCEL_TYPE});
			fs.saveAs(blob, 'excelFileName' + EXCEL_EXTENSION);
		});
	}
}
