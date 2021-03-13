import { RestaurantViewModel } from './view-model';

export class RestaurantViewModels {
  constructor(private list: RestaurantViewModel[]) {}

  toArray(): RestaurantViewModel[] {
    return this.list;
  }

  get(id: string): RestaurantViewModel | undefined {
    return this.list.find((v) => v.id === id);
  }

  toggleCheck(id: string): RestaurantViewModels {
    return new RestaurantViewModels(
      this.list.map((v) => {
        if (v.id === id) {
          return v.toggleCheck();
        }

        return v;
      }),
    );
  }

  toggleFavorite(id: string): RestaurantViewModels {
    return new RestaurantViewModels(
      this.list.map((v) => {
        if (v.id === id) {
          return v.toggleFavorite();
        }

        return v;
      }),
    );
  }

  checkAll(): RestaurantViewModels {
    return new RestaurantViewModels(this.toArray().map((v) => v.check()));
  }

  uncheckAll(): RestaurantViewModels {
    return new RestaurantViewModels(this.toArray().map((v) => v.uncheck()));
  }
}
