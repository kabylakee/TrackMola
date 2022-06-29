import {OptionsTitle} from '../enums/options.enum';
import {AssociativeObject} from '../interfaces/associative-object.interface';
import {IOptionConfig} from '../interfaces/option-config.interface';

export const OPTIONS_CONFIG: AssociativeObject<IOptionConfig> = {
	[OptionsTitle.Copy]: {
		title: OptionsTitle.Copy,
		icon: 'content_copy',
		event: 'copyTo',
	},
	[OptionsTitle.Remove]: {
		title: OptionsTitle.Remove,
		icon: 'delete',
		event: 'remove',
	},
	[OptionsTitle.Move]: {
		title: OptionsTitle.Move,
		icon: 'autorenew',
		event: 'moveTo',
	},
};
