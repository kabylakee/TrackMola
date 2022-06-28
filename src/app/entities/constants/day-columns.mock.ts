import {ColumnType} from '../enums/column-type.enum';
import {ITableColumn} from '../interfaces/table-column.interface';

export const DAY_TABLE_MOCK: ITableColumn[] = [
	{
		id: '0',
		type: ColumnType.CHECK_ALL,
		cls: 'check-all-column',
		title: 'Checked',
		field: 'checked',
	},
	{
		id: '1',
		type: ColumnType.INPUT,
		cls: 'task-column',
		title: 'Task',
		field: 'title',
	},
	{
		id: '2',
		type: ColumnType.PROJECT,
		cls: 'project-column',
		title: 'Project',
		field: 'project',
	},
	{
		id: '3',
		type: ColumnType.STATUS,
		cls: 'status-column',
		title: 'Status',
		field: 'status',
	},
	{
		id: '4',
		type: ColumnType.INPUT,
		cls: 'time-column',
		title: 'Time',
		field: 'time',
	},
	{
		id: '5',
		type: ColumnType.INPUT,
		cls: 'time-column',
		title: 'Overtime',
		field: 'overtime',
	},
	{
		id: '6',
		type: ColumnType.CHECK,
		cls: 'paid-column',
		title: 'Paid',
		field: 'paid',
	},
	{
		id: '7',
		type: ColumnType.LINK,
		cls: 'link-column',
		title: 'Asana Link',
		field: 'asanaLink',
	},
	{
		id: '8',
		type: ColumnType.OPTIONS,
		cls: 'options-column',
		title: 'Options',
		field: 'options',
	},
];
