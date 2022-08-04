import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import {RouterPaths} from './entities/enums/router.enum';

const routes: Routes = [
	{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
	{
		path: RouterPaths.Dashboard,
		loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
	},
	{
		path: RouterPaths.Vacation,
		loadChildren: () => import('./pages/vacation/vacation.module').then((m) => m.VacationModule),
	},
	{
		path: RouterPaths.Statistic,
		loadChildren: () => import('./pages/statistic/statistic.module').then((m) => m.StatisticModule),
	},
	{
		path: RouterPaths.Reports,
		loadChildren: () => import('./pages/reports/reports.module').then((m) => m.ReportsModule),
	},
	{
		path: RouterPaths.Projects,
		loadChildren: () => import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
	},
	{
		path: RouterPaths.Finance,
		loadChildren: () => import('./pages/finance/finance.module').then((m) => m.FinanceModule),
	},
	{
		path: RouterPaths.Management,
		loadChildren: () =>
			import('./pages/management/management.module').then((m) => m.ManagementModule),
	},
	{
		path: RouterPaths.Administration,
		loadChildren: () =>
			import('./pages/administration/administration.module').then((m) => m.AdministrationModule),
	},
	{path: '**', redirectTo: 'dashboard'}, // route for 404 page in future
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
	exports: [RouterModule],
})
export class AppRoutingModule {}
