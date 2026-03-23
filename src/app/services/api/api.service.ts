import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Reports } from '../../models/reports';

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

}
