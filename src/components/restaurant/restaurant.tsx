import { Restaurant } from '../../shared/models/restaurant/restaurant';
import { styles } from './styles';

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantItem({ restaurant }: Props): JSX.Element {
  return (
    <div className="RestaurantListItem">
      <header className="RestaurantListItem_Header">
        <input type="checkbox" className="RestaurantListItem_Header_Checkbox" />
        <h3 className="RestaurantListItem_Header_h">{restaurant.aliasName}</h3>
      </header>
      <div className="RestaurantListItem_Body">
        <div className="RestaurantThumbnail">
          <img className="RestaurantThumbnail_img" src={restaurant.thumbnailUrl} />
        </div>
        <table className="RestaurantInfoTable">
          <tbody>
            <tr className="RestaurantInfoTable_Row">
              <th className="RestaurantInfoTable_head">価格帯</th>
              <td className="RestaurantInfoTable_cell">{restaurant.budgetLevel}</td>
            </tr>
            <tr className="RestaurantInfoTable_Row">
              <th className="RestaurantInfoTable_head">住所</th>
              <td className="RestaurantInfoTable_cell">{`${restaurant.location.displayAddress.join(' ')} `}</td>
            </tr>
            <tr className="RestaurantInfoTable_Row">
              <th className="RestaurantInfoTable_head">電話番号</th>
              <td className="RestaurantInfoTable_cell">{restaurant.phoneNumber}</td>
            </tr>
            <tr className="RestaurantInfoTable_Row">
              <th className="RestaurantInfoTable_head">評価</th>
              <td className="RestaurantInfoTable_cell">{restaurant.rating}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}
