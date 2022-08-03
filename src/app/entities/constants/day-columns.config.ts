import {ColumnType} from '../enums/column-type.enum';
import {ITableColumn} from '../interfaces/table-column.interface';
import {ClsType} from '../enums/cls-type.enum';

export const DAY_TABLE_CONFIG: ITableColumn[] = [
	{
		id: '0',
		type: ColumnType.CHECK_ALL,
		cls: ClsType.CheckAllColumn,
		title: 'Checked',
		field: 'checked',
	},
	{
		id: '1',
		type: ColumnType.INPUT,
		cls: ClsType.TaskColumn,
		title: 'Task',
		field: 'title',
	},
	{
		id: '2',
		type: ColumnType.PROJECT,
		cls: ClsType.ProjectColumn,
		title: 'Project',
		field: 'project',
	},
	{
		id: '3',
		type: ColumnType.STATUS,
		cls: ClsType.StatusColumn,
		title: 'Status',
		field: 'status',
	},
	{
		id: '4',
		type: ColumnType.INPUT,
		cls: ClsType.TimeColumn,
		title: 'Time (h)',
		field: 'time',
	},
	{
		id: '5',
		type: ColumnType.INPUT,
		cls: ClsType.TimeColumn,
		title: 'Overtime (h)',
		field: 'overtime',
	},
	{
		id: '6',
		type: ColumnType.CHECK,
		cls: ClsType.PaidColumn,
		title: 'Paid',
		field: 'paid',
	},
	{
		id: '7',
		type: ColumnType.LINK,
		cls: ClsType.LinkColumn,
		title: 'Task links',
		field: 'asanaLink',
	},
	{
		id: '8',
		type: ColumnType.OPTIONS,
		cls: ClsType.OptionsColumn,
		title: 'Options',
		field: 'options',
	},
];

export const REQUEST_TABLE_CONFIG: ITableColumn[] = [
	{
		id: '0',
		type: ColumnType.CHECK_ALL,
		cls: ClsType.CheckAllColumn,
		title: 'Checked',
		field: 'checked',
	},
	{
		id: '1',
		type: ColumnType.INPUT,
		cls: ClsType.TaskColumn,
		title: 'Name',
		field: 'name',
	},
	{
		id: '2',
		type: ColumnType.PROJECT,
		cls: ClsType.ProjectColumn,
		title: 'Project',
		field: 'project',
	},
	{
		id: '3',
		type: ColumnType.INPUT,
		cls: ClsType.TimeColumn,
		title: 'Period',
		field: 'period',
	},
	{
		id: '4',
		type: ColumnType.CHECK,
		cls: ClsType.PaidColumn,
		title: 'Paid',
		field: 'paid',
	},
	{
		id: '5',
		type: ColumnType.LINK,
		cls: ClsType.LinkColumn,
		title: 'Approve',
		field: 'approved',
	},
	{
		id: '6',
		type: ColumnType.LINK,
		cls: ClsType.LinkColumn,
		title: 'Decline',
		field: 'approved',
	},
	{
		id: '7',
		type: ColumnType.INPUT,
		cls: ClsType.TaskColumn,
		title: 'Notes',
		field: 'notes',
	},
];
