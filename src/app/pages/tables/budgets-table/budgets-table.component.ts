import { Component } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';
import { Budget } from '../../../models/budget';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-budgets-table',
  imports: [MatTableModule, CommonModule],
  templateUrl: './budgets-table.component.html',
  styleUrl: './budgets-table.component.css'
})
export class BudgetsTableComponent 
{
    displayedColumns: string[] = ['budgetID', 'budgetName', 'category', 'plannedAmount', 'createdDate'];
  dataSource = new MatTableDataSource<Budget>();
    constructor(private apiService: ApiService) { }


  ngOnInit(): void
  {
this.apiService.getBudgets().subscribe((budgets : Budget[]) => {
  this.dataSource.data = budgets;
});
  }

}
