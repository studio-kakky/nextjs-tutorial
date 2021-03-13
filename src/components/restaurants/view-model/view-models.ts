import { RestaurantViewModel } from './view-model';

export class RestaurantViewModels {
  constructor(private list: RestaurantViewModel[]) {}

  toArray(): RestaurantViewModel[] {
    return this.list;
  }

  checkAll() {
    this.list.forEach((v) => v.check());
  }

  uncheckAll() {
    this.list.forEach((v) => v.uncheck());
  }
}
