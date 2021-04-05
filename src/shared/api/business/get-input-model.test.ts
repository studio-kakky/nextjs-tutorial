import { YelpBusinessApiGetInputModel } from './get-input-model';

describe('YelpBusinessApiGetInputModel', () => {
  describe('getQueries', () => {
    test('適切なUrlSearchParamsを返す', () => {
      const model = new YelpBusinessApiGetInputModel({
        location: 'tokyo',
        coordinates: {
          lat: 1,
          lng: 1,
        },
        pageNumber: 2,
        budgetLevel: 1,
      });

      const expected = {
        location: 'tokyo',
        lat: '1',
        lng: '1',
        limit: '10',
        offset: '10',
        price: '1',
      };

      expect(model.getQueries()).toEqual(expected);
    });
  });
});
