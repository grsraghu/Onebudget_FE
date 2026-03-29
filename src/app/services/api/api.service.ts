import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Reports } from '../../models/reports';
import { TransactionLog } from '../../models/transactionLog';
import { Budget } from '../../models/budget';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient)  {   }

  getCategories()
{
  return this.http.get(`${this.baseUrl}/categories`);
}

  getReports() : Observable<Reports[]>
{
  return this.http.get<Reports[]>(`${this.baseUrl}/reports`);
}

getTransactions()
{
  return this.http.get<TransactionLog[]>(`${this.baseUrl}/transactions`);
}

getBudgets()
{
  return this.http.get<Budget[]>(`${this.baseUrl}/budgets`);
}
}
