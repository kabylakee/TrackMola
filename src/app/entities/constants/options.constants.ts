import {Options} from '../enums/options.enum';
import {IOptionsButton} from '../interfaces/option-config.interface';

export const OPTIONS_CONFIG: IOptionsButton[] = [
	{
		title: Options.Copy,
		icon: 'content_copy',
		event: 'copyTo',
	},
	{
		title: Options.Remove,
		icon: 'delete',
		event: 'remove',
	},
	{
		title: Options.Move,
		icon: 'autorenew',
		event: 'moveTo',
	},
];
