import styles from './ProductDisplay.module.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../../Context';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className={styles.productDisplay}>
      <div className={styles.left}>
        <div className={styles.imageList}>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className={styles.image}>
            <img className={styles.imageMain} src={product.image} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1>{product.name}</h1>
        <div className={styles.rightStar}>
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
        </div>
        <div className={styles.prices}>
            <div className={styles.oldPrice}>
                ${product.old_price}
            </div>
            <div className={styles.newPrice}>
                ${product.new_price}
            </div>
        </div>
        <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consequuntur incidunt ipsam quaerat, quam maxime obcaecati excepturi. Blanditiis quaerat voluptate iure.
        </div>
        <div className={styles.size}>
            <h1>Select Size</h1>
            <div className={styles.sizes}>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductDisplay;