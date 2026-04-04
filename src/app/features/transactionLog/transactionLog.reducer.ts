import { createReducer, on } from "@ngrx/store";
import { TransactionLogState } from "./transactionLog.state";
import * as TransactionLogActions from "./transactionLog.actions";


// Initial state for the transaction log
export const initialState: TransactionLogState =  {
    transactions: [],
    loading: false,
    error: null
};

export const transactionLogReducer = createReducer(
    initialState,
   // Handle load transaction logs action
   on(TransactionLogActions.loadTransactionLogs, state => (
    {
    ...state,
    loading: true,
    error: null
   })),
    // Handle successful load of transaction logs
    on(TransactionLogActions.loadTransactionLogsSuccess, (state, { transactions }) => (
    {
        ...state,
        transactions,
       loading: false
    })),
    // Handle failed load of transaction logs
    on(TransactionLogActions.loadTransactionLogsFailure, (state, { error }) => (
    {
        ...state,
        loading: false,
        error
    }))
);
