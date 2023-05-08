import { TestBed } from '@angular/core/testing';
import { CompletionDateCalculatorService } from './completiondatecalculator.service';
import { MonthDays } from '../../view-model/month-days.interface';
import { of } from 'rxjs';

describe('CompletionDateCalculatorService', () => {
  let service: CompletionDateCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompletionDateCalculatorService);
  });

  it('should be created CompletionDateCalculatorService', () => {
    expect(service).toBeTruthy();
  });

  it('should set correct completion date if data is returned', () => {
    const startDate: string = '2022-08-01';
    const numberOfDays: number = 1;
    const daysOfMonth: MonthDays = {
      year: '2022',
      month: '08',
      days: {
        '1': 'Monday',
        '2': 'Tuesday',
        '3': 'Wednesday',
        '4': 'Thursday',
        '5': 'Friday',
        '6': 'Saturday',
        '7': 'Sunday',
        '8': 'Monday',
        '9': 'Tuesday',
        '10': 'Wednesday',
        '11': 'Thursday',
        '12': 'Friday',
        '13': 'Saturday',
        '14': 'Sunday',
        '15': 'Monday',
        '16': 'Tuesday',
        '17': 'Wednesday',
        '18': 'Thursday',
        '19': 'Friday',
        '20': 'Saturday',
        '21': 'Sunday',
        '22': 'Monday',
        '23': 'Tuesday',
        '24': 'Wednesday',
        '25': 'Thursday',
        '26': 'Friday',
        '27': 'Saturday',
        '28': 'Sunday',
        '29': 'Monday',
        '30': 'Tuesday',
        '31': 'Wednesday',
      },
    };
    const holidaysOfMonth: MonthDays = {
      year: '2022',
      month: '08',
      days: {
        '11': 'Thursday',
        '23': 'Tuesday',
      },
    };

    const calculatorService: CompletionDateCalculatorService =
      new CompletionDateCalculatorService();
    let actualResult = calculatorService.calculateCompletionDate(
      startDate,
      numberOfDays,
      daysOfMonth,
      holidaysOfMonth
    );
    let expectedResult = of(new Date('2022-08-01'));
    actualResult.subscribe((actualDate: Date) => {
      expectedResult.subscribe((expectedDate: Date) => {
        expect(actualDate.toDateString()).toEqual(expectedDate.toDateString());
      });
    });
  });
});
