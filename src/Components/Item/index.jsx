import { Link } from 'react-router-dom';
import styles from './Item.module.css';

const Item = ({img, name, new_price, old_price, id}) => {
  return (
    <div className={styles.item}>
      <Link to={`/product/${id}`}>
        <img onClick={() => window.scrollTo(0, 0)} className={styles.itemImg} src={img} alt="" />
      </Link> 
      <div className={styles.itemDetails}>
        <p className={styles.itemName}>{name}</p>
        <div className={styles.itemPrices}>
          <div className={styles.priceNew}>
              ${new_price}
          </div>
          <div className={styles.priceOld}>
              ${old_price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item;