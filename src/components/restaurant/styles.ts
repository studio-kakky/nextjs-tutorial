import css from 'styled-jsx/css';

export const styles = css`
  .RestaurantListItem {
    width: 100%;
    border: 1px solid #ccc;
    border-top: 3px solid #ccc;
    margin-bottom: 10px;
    &_Header {
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: #fcdce4;
      &_h {
        margin: 5px 0;
      }
      &_Checkbox {
        display: block;
        width: 20px;
        height: 20px;
        margin-right: 20px;
        position: relative;
        &Input {
          width: 0;
          &:before {
            position: absolute;
            top: 50%;
            content: '';
            display: block;
            width: 20px;
            height: 20px;
            border-radius: 5px;
            border: 1px solid #ccc;
            transform: translateY(-50%);
            background: #fff;
          }
          &:checked {
            &:before {
              background: #0070f3;
            }
            &:after {
              content: url('/images/icon/check-mark.svg');
              display: block;
              position: absolute;
              top: 2px;
              left: 6px;
            }
          }
        }
      }
    }

    &_Body {
      padding: 20px;
      box-sizing: border-box;
    }
  }

  .Restaurant {
    &Thumbnail {
      margin-bottom: 20px;
      text-align: center;
      &_img {
        max-height: 400px;
        max-width: 100%;
      }
    }

    &InfoTable {
      border-collapse: collapse;
      width: 100%;
      &_Row {
        border-bottom: 1px solid #ccc;
        &:first-child {
          border-top: 1px solid #ccc;
        }
      }
      &_head {
        font-weight: normal;
        padding: 5px;
        background: #ddd;
      }
      &_cell {
        padding: 5px 0 5px 10px;
      }
    }
  }
`;
