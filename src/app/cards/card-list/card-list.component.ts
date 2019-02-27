import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CardListModel } from 'src/app/shared/models/magicthegathering/card-list.model';
import { CardModel } from 'src/app/shared/models/magicthegathering/card.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { TypesService } from 'src/app/shared/services/types.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-magic-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnChanges {

  @Input() type: string;
  @Output() onBeforeCards: EventEmitter<boolean>;
  @Output() onLoadedCards: EventEmitter<boolean>;

  public cards: CardModel[];



  constructor(
    private magicTheGatheringService: MagicTheGatheringService,
    private typeService: TypesService,
    private router: Router
  ) {
    this.cards = [];
    this.onBeforeCards = new EventEmitter(true);
    this.onLoadedCards = new EventEmitter(true);


  }

  ngOnInit() { }

  ngOnChanges() {
    if (!this.type) {
      this.loadCards(0);
      return;
    }
    if (!this.typeService.isType(this.type)) {
      this.router.navigate(['/cards']);
      return;
    }
    this.loadCards(this.type);
  }
  loadCards(typeCard) {
    this.onBeforeCards.emit(true);
    (0 === typeCard ?
      this.magicTheGatheringService.getCards() :
      this.magicTheGatheringService.getCardsbyType(typeCard)).subscribe(
        (data: CardListModel) => {         
          this.cards = data.cards;
          this.onLoadedCards.emit(true);
        },
        () => { }
      );
  }


}
