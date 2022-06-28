import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'appCommaSeparated',
	pure: true,
})
export class CommaSeparatedPipe implements PipeTransform {
	transform(value: number): string {
		return value.toString().split('.').join(',');
	}
}
