import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
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

export default function Search(props: Props): JSX.Element {
  const masterList = props.restaurants.map(makeViewModel);
  const [viewModels, setViewModels] = useState(new RestaurantViewModels(masterList.slice(0, 10)));
  const [page, setPage] = useState(1);
  const router = useRouter();

  const loadMore = () => {
    setPage(page + 1);
    const nextList = masterList.slice(page * 10, page * 10 + 10);
    const nextViewModels = new RestaurantViewModels(nextList);
    setViewModels(viewModels.merge(nextViewModels));
  };

  const onToggleChecked = (id: string) => {
    console.log(id);
    setViewModels(viewModels.toggleCheck(id));
  };

  useEffect(() => {
    executeExperience(router);
  });

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

export const getServerSideProps: GetServerSideProps = async (context): Promise<{ props: Props }> => {
  context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

  const location = context.query.location as string;
  const model = new YelpBusinessApiGetInputModel({ location });
  const res = await getYelpBusiness(model);

  return {
    props: {
      location,
      restaurants: adapt(res),
    },
  };
};
