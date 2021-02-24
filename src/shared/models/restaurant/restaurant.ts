export interface Restaurant {
  id: string;
  phoneNumber: string;
  name: string;
  aliasName: string;
  url: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  thumbnailUrl: string;
  location: {
    city: string;
    country: string;
    address1: string;
    address2: string;
    address3: string;
    state: string;
    zipCode: string;
    displayAddress: string[];
  };
  budgetLevel: 0 | 1 | 2 | 3 | 4;
  rating: number;
}
