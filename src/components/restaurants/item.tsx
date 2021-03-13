import { styles } from './styles';
import { RestaurantViewModel } from './view-model/view-model';

interface Props {
  vm: RestaurantViewModel;
}

export default function RestaurantItem({ vm }: Props): JSX.Element {
  return (
    <div className="RestaurantListItem">
      <header className="RestaurantListItem_Header">
        <label className="RestaurantListItem_Header_Checkbox">
          <input type="checkbox" className="RestaurantListItem_Header_CheckboxInput" checked={vm.isChecked} />
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

      <style jsx>{styles}</style>
    </div>
  );
}
