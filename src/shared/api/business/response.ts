/* eslint-disable camelcase */
export interface BusinessResponse {
  rating: number;
  price: '$' | '$$' | '$$$' | '$$$$';
  phone: string;
  id: string;
  alias: string;
  is_closed: string;
  categories: { alias: string; title: string }[];
  review_count: number;
  name: string;
  url: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  image_url: string;
  location: {
    city: string;
    country: string;
    address1: string;
    address2: string;
    address3: string;
    state: string;
    zip_code: string;
    display_address: string[];
  };
  distance: number;
  region: {
    center: {
      latitude: number;
      longitude: number;
    };
  };
}

export interface YelpGetBusinessSearchApiResponse {
  total: number;
  businesses: BusinessResponse[];
}
