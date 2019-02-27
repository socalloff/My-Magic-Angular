import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  public types: string[];

  constructor() {
    this.types = [  
      "Artifact",
      "Conspiracy",
      "Creature",
      "Enchantment",
      "Instant",
      "Land",
      "Phenomenon",
      "Plane",
      "Planeswalker",
      "Scheme",
      "Sorcery",
      "Tribal",
      "Vanguard"
    ];
   }
  
  getTypes(): Observable<string[]> {
    return of(this.types);
   }

  isType(types:string): boolean{
    if(this.types.indexOf(types) === -1){
      return false;
    }
    return true; 
  }
}



