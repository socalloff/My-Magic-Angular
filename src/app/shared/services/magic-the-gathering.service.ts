import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardListModel } from '../models/magicthegathering/card-list.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MagicTheGatheringService {

  constructor(private http:HttpClient) { }

  getCardsbyId(id: string): Observable<CardListModel> {
    return this.http.get<CardListModel>(`https://api.magicthegathering.io/v1/cards?id=${id}`);
  }

  getCardsbyType(type: string): Observable<CardListModel> {
    return this.http.get<CardListModel>(`https://api.magicthegathering.io/v1/cards?types=${type}`);
  }

  getCards(): Observable<CardListModel>{
    return this.http.get<CardListModel>(`https://api.magicthegathering.io/v1/cards`);
  }
}
