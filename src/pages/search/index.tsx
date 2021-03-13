import Layout from '../../layout/layout';
import RestaurantItem from '../../components/restaurants/item';
import { Restaurant } from '../../shared/models/restaurant/restaurant';
import { GetServerSideProps } from 'next';
import { getYelpBusiness } from '../../shared/api/business/api';
import { YelpBusinessApiGetInputModel } from '../../shared/api/business/get-input-model';
import { adapt } from '../../shared/models/restaurant/adapt';
import { makeViewModel } from '../../components/restaurants/view-model/view-model';
import { RestaurantViewModels } from '../../components/restaurants/view-model/view-models';
import Restaurants from '../../components/restaurants/restaurants';
import { useState } from 'react';

interface Props {
  location: string;
  restaurants: Restaurant[];
}

export default function Search(props: Props): JSX.Element {
  const list = props.restaurants.map(makeViewModel);
  const [viewModels, setViewModels] = useState(new RestaurantViewModels(list));

  return (
    <Layout>
      <Restaurants vms={viewModels} />
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
