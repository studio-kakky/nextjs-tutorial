import { BaseGetInputModel } from '../../models/base/api/get-input-model';
import { getAuthorizationHeader } from '../../lib/get-authorized-header';
import { RequestParams } from '../../models/request-params';

export interface YelpBusinessGetApiParams {
  location?: string;
  coordinates?: {
    lat: string;
    lng: string;
  };
  limit?: number;
  offset?: number;
  budgetLevel?: number;
}

export class YelpBusinessGetApiInputModel extends BaseGetInputModel {
  constructor(private params: YelpBusinessGetApiParams) {
    super();
  }

  getHeaders(): Record<string, string> {
    return getAuthorizationHeader();
  }

  getQueries(): RequestParams {
    const location = !!this.params.location ? { location: this.params.location } : {};

    const coordinates = !!this.params.coordinates ? this.params.coordinates : {};

    const limit = !!this.params.limit ? { limit: this.params.limit } : {};
    const offset = !!this.params.offset ? { offset: this.params.offset } : {};
    const price = !!this.params.budgetLevel ? { price: this.params.budgetLevel.toString() } : {};

    const params = {
      ...location,
      ...coordinates,
      ...offset,
      ...limit,
      ...price,
    } as RequestParams;

    if (!params.location && !params.coordinates) {
      return {
        ...params,
        location: 'Tokyo',
      };
    }

    return params;
  }
}
