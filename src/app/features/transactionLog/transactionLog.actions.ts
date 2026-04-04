// Create Transaction Log Actions
import { createAction, props } from "@ngrx/store";
import { TransactionLog } from "../../models/transactionLog";

// Action to load transaction logs
export const loadTransactionLogs = createAction(
    '[Transaction Log] Load'
);
 
// Action for successful load of transaction logs
export const loadTransactionLogsSuccess = createAction(
    '[Transaction Log] Load Success',
    props<{ transactions: TransactionLog[] }>()
);

// Action for failed load of transaction logs
export const loadTransactionLogsFailure = createAction(
    '[Transaction Log] Load Failure',
    props<{ error: string }>()
);



