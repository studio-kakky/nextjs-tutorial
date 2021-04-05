import { YelpBusinessApiGetInputModel } from './get-input-model';
import { YelpGetBusinessSearchApiResponse } from './response';
import { getHostname } from '../lib/get-hostname';

const endpointURL = `/api/businesses/search`;

export const getYelpBusiness = async (
  model: YelpBusinessApiGetInputModel,
): Promise<YelpGetBusinessSearchApiResponse> => {
  const params = new URLSearchParams(model.getQueries());
  const url = `${getHostname()}${endpointURL}?${params}`;
  const res = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
};
