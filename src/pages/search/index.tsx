import Layout from '../../shared/layout/layout';
import { Restaurant } from '../../shared/models/restaurant/restaurant';
import { GetServerSideProps } from 'next';
import { getYelpBusiness } from '../../shared/api/business/api';
import { YelpBusinessGetApiInputModel } from '../../shared/api/business/get-input-model';
import { adapt } from '../../shared/models/restaurant/adapt';

interface Props {
  restaurants: Restaurant[];
}

export const Search = (props: Props): JSX.Element => {
  return <Layout></Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context): Promise<{ props: Props }> => {
  const model = new YelpBusinessGetApiInputModel({});
  const res = await getYelpBusiness(model);

  return {
    props: {
      restaurants: adapt(res),
    },
  };
};
