import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FinanceComponent} from './finance.component';

const routes: Routes = [
	{
		path: '',
		component: FinanceComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FinanceRoutingModule {}
