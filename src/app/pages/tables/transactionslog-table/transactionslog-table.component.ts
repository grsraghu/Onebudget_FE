import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { TransactionLog } from '../../../models/transactionLog';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';
import { Store } from '@ngrx/store';
import * as TransactionLogActions from '../../../features/transactionLog/transactionLog.actions'; 
import { AppState } from '../../../state/app.state';
import {MatDialog} from '@angular/material/dialog';
import { ListHeaderComponent } from '../../shared/components/list-header/list-header/list-header.component';
import { FormsModule } from "@angular/forms";
import { TransactionFormComponent } from '../../forms/transaction-form/transaction-form.component';


@Component({
  selector: 'app-transactionslog-table',
  imports: [CommonModule, MatTableModule, DatePipe, ListHeaderComponent, FormsModule],
  templateUrl: './transactionslog-table.component.html',
  styleUrl: './transactionslog-table.component.css'
})

export class TransactionslogTableComponent implements OnInit

{
  transactions: TransactionLog[] = [];
  dataSourceFiltered: TransactionLog[] = [];
  displayedColumns: string[] = [ 'name', 'description', 'createdDate'];
  // dataSource = new MatTableDataSource<TransactionLog>();


  constructor(private apiService: ApiService, private store: Store<AppState>, private dialog: MatDialog) { }


  ngOnInit(): void 
  {
    // // Get Transactions from the store 
    // this.GetTransactionsByStore();
  
    // Get Transactions from the API
     this.GetTransactionsByApi();
  }

 GetTransactionsByStore(): void 
{
  // Dispatch action to load transaction logs
    this.store.dispatch(TransactionLogActions.loadTransactionLogs());
    // Select transactions from store and update data source
    this.store.select(state => state.transactionLog.transactions).subscribe(transactions => {
      this.transactions = transactions;
      this.dataSourceFiltered = transactions;
    });
 }

 GetTransactionsByApi(): void
 {
    this.apiService.getTransactions().subscribe((transactions: TransactionLog[]) => {
      this.transactions = transactions;
      this.dataSourceFiltered = transactions;
    });
 }

   openAddTransactionDialog(): void 
    {
      // Open a dialog to add a new transaction log
     const dialogRef = this.dialog.open(TransactionFormComponent, {
  width: '80vw',    // 80% of viewport width
  height: '80vh',   // 80% of viewport height
  maxWidth: '95vw', // Safety constraint for very small screens
  maxHeight: '95vh',
  //disableClose: true,    
  //autoFocus: false
});
}

   searchTransactions(data: string): void
    {  
     console.log('Received in Parent:', data); // STEP 1: Verify it arrives here
      this.dataSourceFiltered = this.transactions.filter(transaction =>
        transaction.name.toLowerCase().includes(data.toLowerCase()) ||
        transaction.description.toLowerCase().includes(data.toLowerCase())
      );
    }

    OnClearSearch(): void
    {
            this.dataSourceFiltered = this.transactions;
    }
    
  }
