import Link from 'next/link';

import { styles } from './styles';
import { RestaurantViewModel } from './view-model/view-model';

interface Props {
  vm: RestaurantViewModel;
  onToggleChecked: (id: string) => void;
}

export default function RestaurantItem({ vm, onToggleChecked }: Props): JSX.Element {
  return (
    <div className="RestaurantListItem">
      <header className={vm.isChecked ? 'RestaurantListItem_Header -checked' : 'RestaurantListItem_Header'}>
        <label className="RestaurantListItem_Header_Checkbox checked">
          <input
            type="checkbox"
            className="RestaurantListItem_Header_CheckboxInput"
            defaultChecked={vm.isChecked}
            onClick={() => onToggleChecked(vm.id)}
          />
        </label>
        <h3 className="RestaurantListItem_Header_h">{vm.name}</h3>
      </header>
      <div className="RestaurantListItem_Body">
        <div className="RestaurantThumbnail">
          <img className="RestaurantThumbnail_img" src={vm.thumbNailUrl} />
        </div>
        <table className="RestaurantInfoTable">
          <tbody>
            <tr className="RestaurantInfoTable_Row">
              <th className="RestaurantInfoTable_head">価格帯</th>
              <td className="RestaurantInfoTable_cell">{vm.budget}</td>
            </tr>
            <tr className="RestaurantInfoTable_Row">
              <th className="RestaurantInfoTable_head">住所</th>
              <td className="RestaurantInfoTable_cell">{vm.address}</td>
            </tr>
            <tr className="RestaurantInfoTable_Row">
              <th className="RestaurantInfoTable_head">電話番号</th>
              <td className="RestaurantInfoTable_cell">{vm.phoneNumber}</td>
            </tr>
            <tr className="RestaurantInfoTable_Row">
              <th className="RestaurantInfoTable_head">評価</th>
              <td className="RestaurantInfoTable_cell">{vm.rating}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Util">
        <Link href={`/complete`}>
          <a className="ConversionBtn">完了画面へ</a>
        </Link>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}
