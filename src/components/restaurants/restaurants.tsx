import { useState } from 'react';
import { RestaurantViewModels } from './view-model/view-models';
import RestaurantItem from './item';

interface Props {
  vms: RestaurantViewModels;
}

export default function Restaurants({ vms }: Props): JSX.Element {
  const [viewModels] = useState(vms);

  return (
    <>
      {viewModels.toArray().map((v) => (
        <RestaurantItem vm={v} key={v.id} />
      ))}
    </>
  );
}
