import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CardModel } from 'src/app/shared/models/magicthegathering/card.model';
import { CardListModel } from 'src/app/shared/models/magicthegathering/card-list.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';


@Component({
  selector: 'my-magic-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() id: string;
  public card: CardModel;

  

  constructor(private magicTheGatheringService:MagicTheGatheringService) { }
  
  ngOnInit() {
  }
  
  ngOnChanges() {
    if (this.id) {
      this.magicTheGatheringService.getCardsbyId(this.id).subscribe(
        (data: CardListModel) => this.card = data.cards[0],
        () => {}
      );
    }
  }

  }
  

