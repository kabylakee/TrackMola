import {Status} from '../enums/status.enum';
import {ITask} from '../interfaces/task.interface';

export const TASKS_MOCK: ITask[] = [
	{
		checked: false,
		title: 'Task 1',
		project: 'Project A',
		status: Status.Done,
		time: 4,
		overtime: 0,
		paid: true,
		asanaLink: '',
	},
	{
		checked: false,
		title: 'Task 2',
		project: 'Project A',
		status: Status.InProgress,
		time: 3,
		overtime: 0,
		paid: false,
		asanaLink: 'https://api.chucknorris.io/jokes/CF0vMe-zRTWEbaYEy6LJ1A',
	},
	{
		checked: false,
		title: 'Task 3',
		project: 'Project A',
		status: Status.Done,
		time: 1,
		overtime: 0,
		paid: false,
		asanaLink: '',
	},
];
