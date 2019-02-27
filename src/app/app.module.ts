import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooComponent } from './foo/foo.component';
import { BarModule } from './bar/bar.module';
import { CardsModule } from './cards/cards.module';
import { DeckModule } from './deck/deck.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BarModule,
    DeckModule,
    HomeModule,
    HomeRoutingModule,
    AppRoutingModule,
    CardsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
