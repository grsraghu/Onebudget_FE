import { ApiService } from "../../services/api/api.service";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import * as TransactionLogActions from "./transactionLog.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { inject, Injectable } from '@angular/core'; // 1. Import this


@Injectable()
export class TransactionLogEffects {
  private actions$ = inject(Actions); // Use inject() instead of constructor injection
    private apiService = inject(ApiService); // Use inject() for ApiService
    
// constructor(
//     private actions$: Actions, 
//     private apiService: ApiService 
//   ) {}

  loadTransactionLogs$ = createEffect(() => 
        this.actions$.pipe(
      ofType(TransactionLogActions.loadTransactionLogs),
      mergeMap(() => 
        this.apiService.getTransactions().pipe(
          map(data => {
      // 1. Transform the raw data array
      const formattedTransactions = data.map(transaction => ({
        ...transaction, 
        // 2. Convert the string date to a real Date object
        createdDate: new Date(transaction.createdDate) 
      }));

      // 3. Return the Success action with the new array
      return TransactionLogActions.loadTransactionLogsSuccess({ 
        transactions: formattedTransactions 
      });
    }),
     
          catchError(error => of(TransactionLogActions.loadTransactionLogsFailure({ error })))
        )
      )
    )
  );
}