import { Restaurant } from '../../../shared/models/restaurant/restaurant';

interface ViewModelParams {
  budget: string;
  address: string;
  phoneNumber: string;
  rating: number;
  isChecked: boolean;
  isFavorite: boolean;
}

export class RestaurantViewModel {
  constructor(private params: ViewModelParams) {
    //
  }

  get budget(): string {
    return this.params.budget;
  }

  get address(): string {
    return this.params.address;
  }

  get phoneNumber(): string {
    return this.params.phoneNumber;
  }

  get rating(): number {
    return this.params.rating;
  }

  get isChecked(): boolean {
    return this.params.isChecked;
  }

  get isFavorite(): boolean {
    return this.params.isFavorite;
  }

  toggleCheck() {
    this.params.isChecked = !this.isChecked;
  }

  check() {
    this.params.isChecked = true;
  }

  uncheck() {
    this.params.isChecked = false;
  }

  toggleFavorite() {
    this.params.isFavorite = !this.isFavorite;
  }
}

export const makeViewModel = (restaurant: Restaurant): RestaurantViewModel => {
  const budget = Array.from(Array(restaurant.budgetLevel)).reduce((output) => {
    return output + '￥';
  }, '');

  const params = {
    budget,
    address: restaurant.location.displayAddress.join(' '),
    phoneNumber: restaurant.phoneNumber,
    rating: restaurant.rating,
    isFavorite: false,
    isChecked: false,
  };

  return new RestaurantViewModel(params);
};
