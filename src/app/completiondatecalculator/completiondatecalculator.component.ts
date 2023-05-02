import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MonthDays } from '../view-model/month-days.interface';
import { MonthDetailsService } from '../services/monthdetails.service';
import { CompletionDateCalculatorService } from '../services/completiondatecalculator.service';

@Component({
  selector: 'app-completiondatecalculator',
  templateUrl: './completiondatecalculator.component.html',
  styleUrls: ['./completiondatecalculator.component.css'],
})
export class CompletionDateCalculatorComponent implements OnInit {
  beginingDate!: string;
  completionDate!: Date;
  daysOfMonth!: MonthDays;
  holidaysOfMonth!: MonthDays;
  calculatorForm!: FormGroup;
  startDate!: FormControl;
  daysToComplete!: FormControl;
  isCompletionDateAvailable!: boolean;

  constructor(
    private monthDetailsService: MonthDetailsService,
    private calculatorService: CompletionDateCalculatorService
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
    this.checkStartDate();
    this.getMonthDetails();
    this.getMonthHolidayDetails();
  }

  initFormGroup() {
    this.startDate = new FormControl('', [Validators.required]);
    this.daysToComplete = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
      Validators.max(10),
    ]);
    this.calculatorForm = new FormGroup({
      startDate: this.startDate,
      daysToComplete: this.daysToComplete,
    });
  }

  checkStartDate() {
    this.startDate.valueChanges.subscribe((date) => {
      this.beginingDate = date;
    });
  }

  getMonthDetails() {
    this.monthDetailsService.getDaysOfMonth(8, 2022).subscribe((data) => {
      if (data) {
        this.daysOfMonth = data;
      }
    });
  }

  getMonthHolidayDetails() {
    this.monthDetailsService.getHolidaysOfMonth(8, 2022).subscribe((data) => {
      if (data) {
        this.holidaysOfMonth = data;
      }
    });
  }

  calculateCompletionDate() {
    this.calculatorService
      .calculateCompletionDate(
        this.beginingDate,
        this.daysToComplete.value,
        this.daysOfMonth,
        this.holidaysOfMonth
      )
      .subscribe((data) => {
        if (data) {
          this.completionDate = data;
          this.isCompletionDateAvailable = true;
        }
      });
  }

  resetCalculatorForm() {
    this.calculatorForm.reset();
    if (this.completionDate) {
      this.completionDate.setTime(NaN);
      this.isCompletionDateAvailable = false;
    }
  }
}
