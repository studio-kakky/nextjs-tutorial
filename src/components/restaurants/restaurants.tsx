import { RestaurantViewModels } from './view-model/view-models';
import RestaurantItem from './item';

interface Props {
  vms: RestaurantViewModels;
  onToggleChecked: (id: string) => void;
}

export default function Restaurants({ vms, onToggleChecked }: Props): JSX.Element {
  return (
    <>
      {vms.toArray().map((v) => (
        <RestaurantItem vm={v} key={v.id} onToggleChecked={onToggleChecked} />
      ))}
    </>
  );
}
