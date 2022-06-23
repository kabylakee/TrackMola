import {ColumnType} from '../enums/column-type.enum';

export interface ITableColumn {
	id: string;
	cls: string;
	sortable?: boolean;
	title?: string;
	// sticky: boolean;
	// isDefault?: boolean;
	// childFor?: string;
	// parentFor?: string;
	// checked?: boolean;
	// rowspan?: number;
	// iconKey?: TargetsTableColumnAction;
	field?: string;
	// tooltipText?: string;
	type: ColumnType;
	// width?: number;
	// dropdownMenu?: any[];
	// filterField?: TargetsTableColumnField;
	// formatter?: (value: number) => string;
	// errorToasts?: {max?: string; min?: string};
	// sliderOptions?: {grid: boolean; min: number; max: number; step: number};
	// children?: string[];
	// demoField?: string;
	// demoId?: string;
	// dynamicMaxFunction?: (row: TargetsTableDataItem) => number;
	// dynamicMax?: TargetsTableColumnField;
	// alternativeIconKey?: TargetsTableColumnAction;
	// alternativeTooltipText?: string;
	// filterMode?: AdminFilterCharts.FilterModeTypes;
	// hiddenOn?: AdminPage.ViewModeTable;
	// order?: number;
	// isDemo?: boolean;
}
