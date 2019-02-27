import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-magic-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public titleCards: string;
  public theme: string;
  public myArray: string[];
  public titleApp: string;
  public query: string;
  public isLoading: boolean;

  constructor(private activeRoute : ActivatedRoute) {
    this.titleCards = 'My Magic Cards !';      
    this.titleApp = 'MY MAGIC CARDS';
    this.query = null;
    this.isLoading = false;
  }

  toggleLoading(){
    this.isLoading = !this.isLoading;
  }


  ngOnInit() { 
    if (null === this.query) {
      this.activeRoute.url.subscribe(
        () => this.query = this.activeRoute.snapshot.params["query"]   
      );
    }
  }

}
