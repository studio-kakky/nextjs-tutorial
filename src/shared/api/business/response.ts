/* eslint-disable camelcase */
export interface BusinessResponse {
  rating: number;
  price?: string;
  phone: string;
  id: string;
  alias: string;
  is_closed: boolean;
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
  region?: {
    center: {
      latitude: number;
      longitude: number;
    };
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transactions?: any[];
  display_phone?: string;
}

export interface YelpGetBusinessSearchApiResponse {
  total: number;
  businesses: BusinessResponse[];
}
