import { BusinessResponse, YelpGetBusinessSearchApiResponse } from '../../api/business/response';
import { Restaurant } from './restaurant';

const adaptOne = (res: BusinessResponse) => {
  const budgetLevel = !!res.price ? res.price.length : 0;

  return {
    id: res.id,
    phoneNumber: res.phone,
    name: res.name,
    url: res.url,
    coordinates: res.coordinates,
    thumbnailUrl: res.image_url,
    location: {
      city: res.location.city,
      country: res.location.country,
      address1: res.location.address1,
      address2: res.location.address2,
      address3: res.location.address3,
      state: res.location.state,
      zipCode: res.location.zip_code,
      displayAddress: res.location.display_address,
    },
    budgetLevel: budgetLevel as 0 | 1 | 2 | 3 | 4,
    rating: res.rating,
    aliasName: res.alias,
  };
};

export const adapt = (res: YelpGetBusinessSearchApiResponse): Restaurant[] => {
  return res.businesses.map(adaptOne);
};
