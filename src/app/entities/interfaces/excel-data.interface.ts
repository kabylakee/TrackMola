export interface IManagementExcelData {
	project?: string;
	deliverables?: string;
	resourse?: string;
	surname: string;
	percent?: string;
	workingHours?: string;
	hours?: string;
}

export interface IFinanceExcelData {
	name?: string;
	role?: string;
	rate?: string;
	salaryWO?: string;
	salaryW?: string;
}

export type ExcelData = IManagementExcelData | IFinanceExcelData;
