import {OptionsTitle, OptionsIcon, OptionEvent} from '../enums/options.enum';

export const OPTIONS_CONFIG = [
	{
		title: OptionsTitle.Copy,
		icon: OptionsIcon.Copy,
		event: OptionEvent.Copy,
	},
	{
		title: OptionsTitle.Remove,
		icon: OptionsIcon.Remove,
		event: OptionEvent.Remove,
	},
	{
		title: OptionsTitle.Move,
		icon: OptionsIcon.Move,
		event: OptionEvent.Move,
	},
];
