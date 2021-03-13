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

interface Props {
  restaurants: Restaurant[];
}

export default function Search(props: Props): JSX.Element {
  const list = props.restaurants.map((v) => makeViewModel(v));
  const viewModels = new RestaurantViewModels(list);

  return (
    <Layout>
      <Restaurants vms={viewModels} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context): Promise<{ props: Props }> => {
  context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

  const model = new YelpBusinessApiGetInputModel({
    location: context.query.location as string,
  });
  const res = await getYelpBusiness(model);

  return {
    props: {
      restaurants: adapt(res),
    },
  };
};
