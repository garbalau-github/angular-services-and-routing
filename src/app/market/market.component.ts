import { Component, OnInit } from '@angular/core';
import { Collectable } from '../shared/collectable.model';
import { CollectableService } from '../shared/collectable.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html'
})

export class MarketComponent implements OnInit {

  collectables: Collectable[] = [];

  onAddToCollection(item: Collectable): void {
    this.collectableService.addToCollection(item);
  }

  constructor(private collectableService: CollectableService) { }

  ngOnInit(): void {
    this.collectables = this.collectableService.getCollectables();
  }

}
