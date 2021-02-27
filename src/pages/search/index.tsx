import Layout from '../../shared/layout/layout';
import RestaurantItem from '../../shared/components/restaurant/restaurant';
import { Restaurant } from '../../shared/models/restaurant/restaurant';
import { GetServerSideProps } from 'next';
import { getYelpBusiness } from '../../shared/api/business/api';
import { YelpBusinessApiGetInputModel } from '../../shared/api/business/get-input-model';
import { adapt } from '../../shared/models/restaurant/adapt';
interface Props {
  restaurants: Restaurant[];
}

export default function Search(props: Props): JSX.Element {
  return (
    <Layout>
      {props.restaurants.map((v) => (
        <RestaurantItem restaurant={v} key={v.id} />
      ))}
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
