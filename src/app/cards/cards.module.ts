import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';
import { CardsRoutingModule } from './cards-routing.module';
import { TypeListComponent } from './type-list/type-list.component';
import { HeaderComponent } from './shared/header/header.component';



@NgModule({
  declarations: [
    CardsComponent, 
    CardListComponent, 
    CardComponent, 
    TypeListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardsRoutingModule
  ],
  exports:[
  ],
})
export class CardsModule { }
