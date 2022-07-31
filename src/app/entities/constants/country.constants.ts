import {IViewPeriod} from '../interfaces/view-period.interface';
import {CountryEnum} from '../enums/country.enum';

export const COUNTRY_TOGGLE: IViewPeriod<CountryEnum>[] = [
	{
		title: 'Belarus',
		mode: CountryEnum.Belarus,
	},
	{
		title: 'Ukraine',
		mode: CountryEnum.Ukraine,
	},
	{
		title: 'Russia',
		mode: CountryEnum.Russia,
	},
	{
		title: 'Poland',
		mode: CountryEnum.Poland,
	},
	{
		title: 'USA',
		mode: CountryEnum.USA,
	},
	{
		title: 'Cypris',
		mode: CountryEnum.Cypris,
	},
	{
		title: 'Spain',
		mode: CountryEnum.Spain,
	},
];
