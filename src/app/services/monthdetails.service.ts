import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MonthDays } from '../view-model/month-days.interface';

@Injectable({
  providedIn: 'root',
})
export class MonthDetailsService {

  constructor(private http: HttpClient) {}

  /**
   * Assuming that the values of the month and year are passed as parameters to the API endpoint
  */

  getDaysOfMonth(year: number, month: number): Observable<MonthDays> {
    return this.http.get<MonthDays>('../../assets/response/daysofmonth.response.json');
  }

  getHolidaysOfMonth(year: number, month: number): Observable<MonthDays> {
    return this.http.get<MonthDays>('../../assets/response/holiydaysofmonth.response.json');
  }
}
