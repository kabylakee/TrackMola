export class PeriodHelper {
	public static transformDates(from: Date, to: Date): string {
		let period = '';
		if (from.getDate() < 10) period += '0';
		period += from.getDate() + '.';
		if (from.getMonth() + 1 < 10) period += '0';
		period += from.getMonth() + 1;
		period += from.getFullYear() % 2000;
		period += ' - ';
		if (to.getDate() < 10) period += '0';
		period += to.getDate() + '.';
		if (to.getMonth() + 1 < 10) period += '0';
		period += to.getMonth() + 1;
		period += to.getFullYear() % 2000;
		return period;
	}
	public static transpormDate(date: Date): string {
		let returnDate = '';
		if (date.getDate() < 10) returnDate += '0';
		returnDate += date.getDate() + '.';
		if (date.getMonth() + 1 < 10) returnDate += '0';
		returnDate += date.getMonth() + 1 + '.';
		returnDate += date.getFullYear() % 2000;
		return returnDate;
	}
}
