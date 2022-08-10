export interface ICalendarDays {
	date: Date;
	disabled: boolean;
	vacation: boolean;
	dayOff: boolean;
	startVacation: boolean;
	endVacation: boolean;
	startVacationUnpaid: boolean;
	startUnapprovedVacation: boolean;
	endUnapprovedVacation: boolean;
	endVacationUnpaid: boolean;
	unapprovedVacation: boolean;
}
