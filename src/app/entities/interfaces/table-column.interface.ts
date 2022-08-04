import {ColumnType, UsersColumnType} from '../enums/column-type.enum';
import {ClsType} from '../enums/cls-type.enum';

export interface ITableColumn {
	id: string;
	cls: ClsType;
	sortable?: boolean;
	title?: string;
	field?: string;
	type: ColumnType | UsersColumnType;
}
