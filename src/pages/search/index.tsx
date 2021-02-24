import Layout from '../../shared/layout/layout';
import { Restaurant } from '../../shared/models/restaurant/restaurant';
import { GetServerSideProps } from 'next';
import { getYelpBusiness } from '../../shared/api/business/api';
import { YelpBusinessGetApiInputModel } from '../../shared/api/business/get-input-model';
import { adapt } from '../../shared/models/restaurant/adapt';
import utilStyles from '../../shared/styles/utils.module.css';
import Link from 'next/link';
import Date from '../../shared/components/date/date';

interface Props {
  restaurants: Restaurant[];
}

export default function Search(props: Props): JSX.Element {
  return (
    <Layout>
      {props.restaurants.map((v) => (
        <li>{v.name}</li>
      ))}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (): Promise<{ props: Props }> => {
  const model = new YelpBusinessGetApiInputModel({});
  const res = await getYelpBusiness(model);

  return {
    props: {
      restaurants: adapt(res),
    },
  };
};
