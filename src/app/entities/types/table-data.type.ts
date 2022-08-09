import {IFinance} from '../interfaces/finance.interface';
import {IManagementRequest, IVacationRequest} from '../interfaces/request.interface';
import {ITask} from '../interfaces/task.interface';

export type TableDataType = ITask | IVacationRequest | IManagementRequest | IFinance;
