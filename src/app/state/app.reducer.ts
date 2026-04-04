import { AppState } from './app.state';
import { transactionLogReducer } from '../features/transactionLog/transactionLog.reducer';

export const appReducers = {
  transactionLog: transactionLogReducer,
};