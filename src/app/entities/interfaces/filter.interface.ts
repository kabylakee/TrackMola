import {IFilterItem} from './filter-item.interface';
import {IProject} from './project.interface';

export interface IFilter {
	projects: IProject[];
	statuses: IFilterItem[];
	overtimes: IFilterItem[];
}
