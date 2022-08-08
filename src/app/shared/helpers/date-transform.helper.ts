export class DateTransformHelper {
	public static weeklyReportFormat(date: Date) {
		return `${DateTransformHelper.toTwoSymbles(date.getMonth())}-${DateTransformHelper.toTwoSymbles(
			date.getDate(),
		)}-${DateTransformHelper.toTwoSymbles(date.getFullYear())}`;
	}

	private static toTwoSymbles(number: number): string {
		return number < 10 ? `0${number}` : `${number}`;
	}
}
