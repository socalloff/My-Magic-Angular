import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';


@NgModule({
  declarations: [
    BarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //rend visible le component dans le scope supérieur
    BarComponent
  ]
})
export class BarModule { }
