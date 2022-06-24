import {OptionsTitle, OptionsEvent, OptionsIcon} from '../enums/options.enum';
import {IOptionsButton} from '../interfaces/option-config.interface';

export const OPTIONS_CONFIG: IOptionsButton[] = [
	{
		title: OptionsTitle.Copy,
		icon: OptionsIcon.Copy,
		event: OptionsEvent.Copy,
	},
	{
		title: OptionsTitle.Remove,
		icon: OptionsIcon.Remove,
		event: OptionsEvent.Remove,
	},
	{
		title: OptionsTitle.Move,
		icon: OptionsIcon.Move,
		event: OptionsEvent.Move,
	},
];
