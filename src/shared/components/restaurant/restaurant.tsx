import { Restaurant } from '../../models/restaurant/restaurant';
import style from './styles.module.scss';

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantItem({ restaurant }: Props): JSX.Element {
  return (
    <div className={style.RestaurantListItem}>
      <header className={style.RestaurantListItem_Header}>
        <input type="checkbox" className={style.RestaurantListItem_Header_Checkbox} />
        <h3 className={style.RestaurantListItem_Header_h}>{restaurant.aliasName}</h3>
      </header>
      <div className={style.RestaurantListItem_Body}>
        <div className={style.RestaurantThumbnail}>
          <img className={style.RestaurantThumbnail_img} src={restaurant.thumbnailUrl} />
        </div>
        <table className={style.RestaurantInfoTable}>
          <tbody>
            <tr className={style.RestaurantInfoTable_Row}>
              <th className={style.RestaurantInfoTable_head}>価格帯</th>
              <td className={style.RestaurantInfoTable_cell}>{restaurant.budgetLevel}</td>
            </tr>
            <tr className={style.RestaurantInfoTable_Row}>
              <th className={style.RestaurantInfoTable_head}>住所</th>
              <td className={style.RestaurantInfoTable_cell}>{`${restaurant.location.displayAddress.join(' ')} `}</td>
            </tr>
            <tr className={style.RestaurantInfoTable_Row}>
              <th className={style.RestaurantInfoTable_head}>電話番号</th>
              <td className={style.RestaurantInfoTable_cell}>{restaurant.phoneNumber}</td>
            </tr>
            <tr className={style.RestaurantInfoTable_Row}>
              <th className={style.RestaurantInfoTable_head}>評価</th>
              <td className={style.RestaurantInfoTable_cell}>{restaurant.rating}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
