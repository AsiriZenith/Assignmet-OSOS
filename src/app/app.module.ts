import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CompletionDateCalculatorComponent } from './completiondatecalculator/completiondatecalculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompletionDateCalculatorService } from './services/completiondatecalculator/completiondatecalculator.service';
import { HttpClientModule } from '@angular/common/http';
import { MonthDetailsService } from './services/monthdetails/monthdetails.service';

@NgModule({
  declarations: [AppComponent, CompletionDateCalculatorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [MonthDetailsService, CompletionDateCalculatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
