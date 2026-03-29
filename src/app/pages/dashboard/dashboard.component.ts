import { Component } from '@angular/core';
import { ReportsTableComponent } from "../tables/reports-table/reports-table.component";

@Component({
  selector: 'app-dashboard',
  imports: [ReportsTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent 
{

}
