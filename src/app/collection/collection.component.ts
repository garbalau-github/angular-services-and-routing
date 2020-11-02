import { Component, OnInit } from '@angular/core';
import { Collectable } from '../shared/collectable.model';
import { CollectableService } from '../shared/collectable.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html'
})

export class CollectionComponent implements OnInit {

  collectedItems: Collectable[] = [];

  constructor(private collectableService: CollectableService) { }

  ngOnInit(): void {
    this.collectedItems = this.collectableService.getCollection();
  }

  removeFromCollection (item: Collectable) {
    this.collectableService.removeFromCollection(item);
  }

}
