import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompletionDateCalculatorComponent } from './completiondatecalculator.component';
import { CompletionDateCalculatorService } from '../services/completiondatecalculator.service';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';

describe('CompletionDateCalculatorComponent', () => {
  let component: CompletionDateCalculatorComponent;
  let fixture: ComponentFixture<CompletionDateCalculatorComponent>;

  let calculatorService: any;
  let monthDetailsService: any;
  let daysToCompleteFormControl = new FormControl(3);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompletionDateCalculatorService],
    });
    calculatorService = jasmine.createSpyObj(['calculateCompletionDate']);
    monthDetailsService = jasmine.createSpyObj([
      'getDaysOfMonth',
      'getHolidaysOfMonth',
    ]);
    component = new CompletionDateCalculatorComponent(
      calculatorService,
      monthDetailsService
    );
  });

  it('should set completion date if data is returned', () => {
    component.beginingDate = '2022-08-02';
    component.daysToComplete = daysToCompleteFormControl;
    component.daysOfMonth = {
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
    component.holidaysOfMonth = {
      year: '2022',
      month: '08',
      days: {
        '11': 'Thursday',
        '23': 'Tuesday',
      },
    };
    spyOn(calculatorService, 'calculateCompletionDate').and.callThrough();
    spyOn(calculatorService, 'calculateCompletionDate').and.returnValue(
      of(new Date('2022-08-04'))
    );
    component.calculateCompletionDate();
    expect(component.completionDate).toEqual(new Date('2022-08-04'));
  });

  it('should set completion date and isCompletionDateAvailable flag when data is returned', () => {
    const beginingDate = '2022-08-02';
    const daysToComplete = new FormControl(3);
    const daysOfMonth = {
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
    const holidaysOfMonth = {
      year: '2022',
      month: '08',
      days: {
        '11': 'Thursday',
        '23': 'Tuesday',
      },
    };
    const completionDate = new Date('2022-08-04');

    spyOn(calculatorService, 'calculateCompletionDate').and.returnValue(
      of(completionDate)
    );

    component.beginingDate = beginingDate;
    component.daysToComplete = daysToComplete;
    component.daysOfMonth = daysOfMonth;
    component.holidaysOfMonth = holidaysOfMonth;
    component.calculateCompletionDate();

    expect(calculatorService.calculateCompletionDate).toHaveBeenCalledWith(
      beginingDate,
      daysToComplete.value,
      daysOfMonth,
      holidaysOfMonth
    );
    expect(component.completionDate).toEqual(completionDate);
  });
});
