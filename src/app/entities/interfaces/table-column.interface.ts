import {ColumnType} from '../enums/column-type.enum';

export interface ITableColumn {
	id: string;
	cls: string;
	sortable?: boolean;
	title?: string;
	field?: string;
	type: ColumnType;
}
