import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: 'cards/:query', component: CardsComponent},
  { path: '**', component: CardsComponent}
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class CardsRoutingModule { }
