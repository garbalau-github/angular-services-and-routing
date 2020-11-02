import { Collectable } from './collectable.model';

export class CollectableService {

  private collectables: Collectable[] = [
    { description: 'A copy of "jQuery for Dummies" ', type: 'Book' },
    { description: 'First ever written letter', type: 'Piece of Paper' },
    { description: 'Photograph showing dusk', type: 'Photo' },
    { description: 'Box with all sold Zunes', type: 'Garbage' }
  ];

  private collection: Collectable[] = [];

  getCollectables () {
    return this.collectables;
  }

  getCollection () {
    return this.collection;
  }

  addToCollection (item: Collectable) {
    if (this.collection.indexOf(item) !== -1) {
      return;
    } else {
      this.collection.push(item);
    }
  }

  removeFromCollection (item: Collectable) {
    this.collection.splice(this.collection.indexOf(item), 1);
  }

}
