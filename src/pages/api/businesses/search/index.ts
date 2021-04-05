import { yokohama } from '../../../../../api-mock-data/business/search/yokohma';
import { tokyo } from '../../../../../api-mock-data/business/search/tokyo';
import { NextApiRequest, NextApiResponse } from 'next';
import { BusinessResponse, YelpGetBusinessSearchApiResponse } from '../../../../shared/api/business/response';

const getResponse = (businesses: BusinessResponse[]): YelpGetBusinessSearchApiResponse => {
  return {
    businesses,
    total: businesses.length,
  };
};

const getSlicedBusinesses = (
  businesses: BusinessResponse[],
  query: { limit?: string; offset?: string },
): BusinessResponse[] => {
  const limit = (() => {
    if (!query.limit) {
      return 20;
    }

    const parsed = parseInt(query.limit, 10);
    if (isNaN(parsed)) {
      return 20;
    }

    return parsed > 50 ? 50 : parsed;
  })();

  const parsedOffset = parseInt(query.offset, 10);
  const offset = isNaN(parsedOffset) ? 0 : parsedOffset;
  return businesses.slice(offset, offset + limit);
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.location === 'yokohama') {
    res.status(200).json(getResponse(getSlicedBusinesses(yokohama, req.query)));
    return;
  }

  if (req.query.location === 'tokyo') {
    res.status(200).json(getResponse(getSlicedBusinesses(tokyo, req.query)));
    return;
  }

  res.status(200).json(getResponse([]));
};
