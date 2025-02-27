import { useContext } from "react";
import styles from "./CartItems.module.css";
import { ShopContext } from "../../Context";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const {all_product, cartItems, addToCart, removeFromCart} = useContext(ShopContext);

  return (
    <div className={styles.cartItems}>
      <div className={styles.main}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if(cartItems[e.id] > 0)
        {
          return <div>
                    <div className={styles.format}>
                      <img className={styles.productIcon} src={e.image} alt="" />
                      <p>{e.name}</p>
                      <p>${e.new_price}</p>
                      <button className={styles.quantity}>{cartItems[e.id]}</button>
                      <p>${e.new_price*cartItems[e.id]}</p>
                      <img className={styles.removeIcon} src={remove_icon} onClick={() => removeFromCart(e.id)} alt="" />
                    </div>
                    <hr />
                  </div>
        }
        return null;
      })}
      <div className={styles.down}>
        <div className={styles.total}>
          <h1>Cart Total</h1>
          <div>
            <div className={styles.totalPrice}>
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className={styles.totalPrice}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={styles.totalPrice}>
              <h3>Total</h3>
              <h3>${0}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className={styles.promocode}>
          <p>If you have a promo code, Enter it here</p>
          <div className={styles.promoBox}>
            <input type="text" placeholder="Promo Code"/>
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
