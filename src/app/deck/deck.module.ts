import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './deck.component';
import { DeckRoutingModule } from './deck-routing.module';

@NgModule({
  declarations: [DeckComponent],
  imports: [
    CommonModule,
    DeckRoutingModule,
  ],
  exports:[
    DeckComponent
  ],
})
export class DeckModule { }
