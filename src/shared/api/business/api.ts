import { YelpBusinessGetApiInputModel } from './get-input-model';
import { BusinessResponse } from './response';
import { getAuthorizationHeader } from '../lib/get-authorized-header';

const endpointURL = 'https://api.yelp.com/v3/businesses/search';

export const getYelpBusiness = async (model: YelpBusinessGetApiInputModel): Promise<BusinessResponse> => {
  const params = new URLSearchParams(model.getQueries());
  const res = await fetch(`${endpointURL}${params.toString()}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthorizationHeader(),
    },
  });

  return res.json();
};
