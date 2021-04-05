import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../layout/layout';
import { getYelpBusiness } from '../../shared/api/business/api';
import { YelpBusinessApiGetInputModel } from '../../shared/api/business/get-input-model';
import { adapt } from '../../shared/models/restaurant/adapt';
import { makeViewModel } from '../../components/restaurants/view-model/view-model';
import { RestaurantViewModels } from '../../components/restaurants/view-model/view-models';
import Restaurants from '../../components/restaurants/restaurants';
import { executeExperience } from '../../shared/lib/kaizen-platform/execute-experience';

const fetchRestaurants = async (location: string, pageNumber: number): Promise<RestaurantViewModels> => {
  const model = new YelpBusinessApiGetInputModel({ location, pageNumber });
  const res = await getYelpBusiness(model);
  const list = adapt(res);
  const viewModelList = list.map(makeViewModel);
  return new RestaurantViewModels(viewModelList);
};

export default function Search(): JSX.Element {
  const [viewModels, setViewModels] = useState(RestaurantViewModels.blank());
  const [page, setPage] = useState(1);
  const [location, setLocation] = useState<string>();
  const router = useRouter();

  const fetch = async () => {
    const nextViewModels = await fetchRestaurants(location, page);
    setViewModels(viewModels.merge(nextViewModels));
  };

  const loadMore = async () => {
    setPage(page + 1);
  };

  const onToggleChecked = (id: string) => {
    setViewModels(viewModels.toggleCheck(id));
  };

  useEffect(() => {
    if (router.asPath !== router.route) {
      setLocation(router.query.location as string);
    }
  }, [router]);

  useEffect(() => {
    if (!!location) {
      fetch().then(() => {
        requestAnimationFrame(() => {
          executeExperience(router);
        });
      });
    }
  }, [location]);

  useEffect(() => {
    if (!!page && page !== 1) {
      fetch();
    }
  }, [page]);

  return (
    <Layout>
      <Restaurants vms={viewModels} onToggleChecked={onToggleChecked} />
      <a onClick={loadMore}>もっと見る</a>
      <style jsx>{`
        a {
          cursor: pointer;
        }
      `}</style>
    </Layout>
  );
}
