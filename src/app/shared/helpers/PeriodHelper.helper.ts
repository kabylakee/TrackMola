export class PeriodHelper {
	public static transformDates(from: Date, to: Date): string {
		let period = '';
		if (from.getDate() < 10) period += '0';
		period += from.getDate() + '.';
		if (from.getMonth() + 1 < 10) period += '0';
		period += from.getMonth() + 1;
		period += '.' + (from.getFullYear() % 2000);
		period += ' - ';
		if (to.getDate() < 10) period += '0';
		period += to.getDate() + '.';
		if (to.getMonth() + 1 < 10) period += '0';
		period += to.getMonth() + 1;
		period += '.' + (to.getFullYear() % 2000);
		return period;
	}
}
