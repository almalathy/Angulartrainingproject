import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { Card1Component } from './card1/card1.component';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
   {path:'', component:CalculatorComponent},
   {path:'card1', component:Card1Component},
   {path:'card', component :CardDetailsComponent},
   {path:'dummy', component :DummyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
