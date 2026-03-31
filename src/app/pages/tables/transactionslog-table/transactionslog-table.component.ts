import { Component } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { TransactionLog } from '../../../models/transactionLog';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-transactionslog-table',
  imports: [CommonModule, MatTableModule, DatePipe],
  templateUrl: './transactionslog-table.component.html',
  styleUrl: './transactionslog-table.component.css'
})
export class TransactionslogTableComponent 

{
  transactions: TransactionLog[] = [];

  displayedColumns: string[] = [ 'name', 'description', 'createdDate'];
  dataSource = new MatTableDataSource<TransactionLog>();


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTransactions().subscribe
    (
      {
        next: (transactions: TransactionLog[]) => 
        {
          this.transactions = transactions;
        },
        error:(e) => console.error(e),
        complete:() => console.log('TransactionLog data retrieval completed')
      }
    );

}
}
