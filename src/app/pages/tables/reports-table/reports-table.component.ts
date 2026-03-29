import { Component } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { Reports } from '../../../models/reports';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-reports-table',
  imports: [CommonModule, DatePipe, MatTableModule],
  templateUrl: './reports-table.component.html',
  styleUrl: './reports-table.component.css'
})
export class ReportsTableComponent 
{

  //reports: Reports[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'plannedCost', 'actualCost', 'difference'];
  dataSource = new MatTableDataSource<Reports>();
  constructor(private apiService: ApiService) { }

  ngOnInit(): void 
  {
    this.apiService.getReports().subscribe((reports: Reports[]) => {
      // this.reports = reports;
      this.dataSource.data = reports;
    });
  }
}
