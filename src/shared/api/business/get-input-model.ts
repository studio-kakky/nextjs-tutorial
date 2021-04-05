import { BaseGetInputModel } from '../../models/base/api/get-input-model';
const defaultLimit = 10;

export interface YelpBusinessGetApiParams {
  location?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  budgetLevel?: number;
  pageNumber?: number;
}

export class YelpBusinessApiGetInputModel extends BaseGetInputModel {
  constructor(private params: YelpBusinessGetApiParams) {
    super();
  }

  getHeaders(): Record<string, string> {
    return {};
  }

  getQueries(): Record<string, string> {
    const location = !!this.params.location ? { location: this.params.location } : {};

    const coordinates = !!this.params.coordinates
      ? { lat: this.params.coordinates.lat.toString(), lng: this.params.coordinates.lng.toString() }
      : {};

    const offset = !!this.params.pageNumber
      ? { offset: ((this.params.pageNumber - 1) * defaultLimit).toString() }
      : { offset: '0' };

    const price = this.params.budgetLevel !== undefined ? { price: this.params.budgetLevel.toString() } : {};

    const params = {
      ...coordinates,
      ...location,
      ...offset,
      ...price,
      limit: defaultLimit.toString(),
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
