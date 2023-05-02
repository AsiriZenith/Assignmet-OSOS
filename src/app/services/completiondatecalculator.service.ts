import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MonthDays } from '../view-model/month-days.interface';

@Injectable({
  providedIn: 'root',
})
export class CompletionDateCalculatorService {
  constructor() {}

  calculateCompletionDate(
    startDate: string,
    numberOfDays: number,
    daysOfMonth: MonthDays,
    holidaysOfMonth: MonthDays
  ): Observable<Date> {

    const [year, month, day] = startDate.split('-').map(Number);
    let completionDate = day + Number(numberOfDays) - 1;

    for (let i = day; i <= completionDate; i++) {
      if (i in daysOfMonth.days && daysOfMonth.days[i] === 'Saturday') {
        completionDate += 2;
      } else if (i in holidaysOfMonth.days) {
        completionDate += 1;
      }
    }

    const date = new Date(year, month - 1, completionDate);
    return of(date);
  }
}
