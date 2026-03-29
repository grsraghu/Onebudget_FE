import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ReportsTableComponent } from "../tables/reports-table/reports-table.component";
import { TransactionslogTableComponent } from "../tables/transactionslog-table/transactionslog-table.component";
import { BudgetsTableComponent } from "../tables/budgets-table/budgets-table.component";

@Component({
  selector: 'app-tabgroup',
  imports: [MatTabsModule, ReportsTableComponent, TransactionslogTableComponent, BudgetsTableComponent],
  templateUrl: './tabgroup.component.html',
  styleUrl: './tabgroup.component.css'
})
export class TabgroupComponent {

}
