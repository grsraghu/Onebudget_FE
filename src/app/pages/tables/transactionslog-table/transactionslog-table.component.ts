import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { TransactionLog } from '../../../models/transactionLog';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';
import { Store } from '@ngrx/store';
import * as TransactionLogActions from '../../../features/transactionLog/transactionLog.actions'; 
import { TransactionLogState } from '../../../features/transactionLog/transactionLog.state';
import { AppState } from '../../../state/app.state';

@Component({
  selector: 'app-transactionslog-table',
  imports: [CommonModule, MatTableModule, DatePipe],
  templateUrl: './transactionslog-table.component.html',
  styleUrl: './transactionslog-table.component.css'
})

export class TransactionslogTableComponent implements OnInit

{
  transactions: TransactionLog[] = [];

  displayedColumns: string[] = [ 'name', 'description', 'createdDate'];
  // dataSource = new MatTableDataSource<TransactionLog>();


  constructor(private apiService: ApiService, private store: Store<AppState>) { }


  ngOnInit(): void {
    // Dispatch action to load transaction logs
    this.store.dispatch(TransactionLogActions.loadTransactionLogs());
    
    // Select transactions from store and update data source
    this.store.select(state => state.transactionLog.transactions).subscribe(transactions => {
      this.transactions = transactions;
      
    });
  }
}
