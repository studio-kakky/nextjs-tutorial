import { RestaurantViewModel } from './view-model';

export class RestaurantViewModels {
  static blank(): RestaurantViewModels {
    return new RestaurantViewModels([]);
  }

  constructor(private list: RestaurantViewModel[]) {}

  toArray(): RestaurantViewModel[] {
    return this.list;
  }

  toggleCheck(id: string): RestaurantViewModels {
    return new RestaurantViewModels(
      this.list.map((v) => {
        if (v.id === id) {
          return v.toggleCheck();
        }

        return v.clone();
      }),
    );
  }

  toggleFavorite(id: string): RestaurantViewModels {
    return new RestaurantViewModels(
      this.list.map((v) => {
        if (v.id === id) {
          return v.toggleFavorite();
        }

        return v.clone();
      }),
    );
  }

  checkAll(): RestaurantViewModels {
    return new RestaurantViewModels(this.toArray().map((v) => v.check()));
  }

  uncheckAll(): RestaurantViewModels {
    return new RestaurantViewModels(this.toArray().map((v) => v.uncheck()));
  }

  merge(others: RestaurantViewModels): RestaurantViewModels {
    const currentList = this.list.map((v) => v.clone());
    const othersList = others.toArray().map((v) => v.clone());
    return new RestaurantViewModels(currentList.concat(othersList));
  }
}
