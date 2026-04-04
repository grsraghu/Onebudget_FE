import { TransactionLog } from "../../models/transactionLog";

export interface TransactionLogState
{
    transactions: TransactionLog[];
    loading: boolean;
    error: string | null;
}