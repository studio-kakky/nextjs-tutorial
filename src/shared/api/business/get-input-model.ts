import { BaseGetInputModel } from '../../models/base/api/get-input-model';
import { getAuthorizationHeader } from '../lib/get-authorized-header';

export interface YelpBusinessGetApiParams {
  location?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  limit?: number;
  offset?: number;
  budgetLevel?: number;
}

export class YelpBusinessApiGetInputModel extends BaseGetInputModel {
  constructor(private params: YelpBusinessGetApiParams) {
    super();
  }

  getHeaders(): Record<string, string> {
    return getAuthorizationHeader();
  }

  getQueries(): Record<string, string> {
    const location = !!this.params.location ? { location: this.params.location } : {};

    const coordinates = !!this.params.coordinates
      ? { lat: this.params.coordinates.lat.toString(), lng: this.params.coordinates.lng.toString() }
      : {};

    const limit = !!this.params.limit ? { limit: this.params.limit.toString() } : {};
    const offset = !!this.params.offset ? { offset: this.params.offset.toString() } : {};
    const price = this.params.budgetLevel !== undefined ? { price: this.params.budgetLevel.toString() } : {};

    const params = {
      ...coordinates,
      ...location,
      ...offset,
      ...limit,
      ...price,
    };

    if (!this.params.location && !this.params.coordinates) {
      return {
        ...params,
        location: 'Tokyo',
      };
    }

    return params;
  }
}
