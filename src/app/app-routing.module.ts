import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletionDateCalculatorComponent } from './completiondatecalculator/completiondatecalculator.component';

const routes: Routes = [
  { path: '', component: CompletionDateCalculatorComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
