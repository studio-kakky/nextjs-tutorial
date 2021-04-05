import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../layout/layout';
import { Restaurant } from '../../shared/models/restaurant/restaurant';
import { getYelpBusiness } from '../../shared/api/business/api';
import { YelpBusinessApiGetInputModel } from '../../shared/api/business/get-input-model';
import { adapt } from '../../shared/models/restaurant/adapt';
import { makeViewModel } from '../../components/restaurants/view-model/view-model';
import { RestaurantViewModels } from '../../components/restaurants/view-model/view-models';
import Restaurants from '../../components/restaurants/restaurants';
import { executeExperience } from '../../shared/lib/kaizen-platform/execute-experience';

interface Props {
  location: string;
  restaurants: Restaurant[];
}

export default function Search(): JSX.Element {
  const [viewModels, setViewModels] = useState(RestaurantViewModels.blank());
  const [page, setPage] = useState(1);
  const [location, setLocation] = useState<string>();
  const router = useRouter();

  const loadMore = async () => {
    const model = new YelpBusinessApiGetInputModel({ location: location, pageNumber: page + 1 });
    const res = await getYelpBusiness(model);
    const list = adapt(res);
    const viewModelList = list.map(makeViewModel);
    const nextViewModels = new RestaurantViewModels(viewModelList);
    setViewModels(viewModels.merge(nextViewModels));
    setPage(page + 1);
  };

  const initialFetch = async () => {
    const model = new YelpBusinessApiGetInputModel({ location, pageNumber: 1 });
    const res = await getYelpBusiness(model);
    const list = adapt(res);
    const viewModelList = list.map(makeViewModel);
    setViewModels(new RestaurantViewModels(viewModelList));
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
      initialFetch().then(() => {
        requestAnimationFrame(() => {
          executeExperience(router);
        });
      });
    }
  }, [location]);

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
