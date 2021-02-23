import { yelp } from '../../../../.yelp-api-key';

export const getAuthorizationHeader = (): { authorization: string } => {
  return { authorization: `Bearer ${yelp.apiKey}` };
};
