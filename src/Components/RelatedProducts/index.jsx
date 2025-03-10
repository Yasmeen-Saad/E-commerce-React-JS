import styles from "./RelatedProducts.module.css";
import data_product from "../Assets/data";
import Item from "../Item";

const RelatedProducts = () => {
  return (
    <div className={styles.relatedProducts}>
      <h1>Related Products</h1>
      <hr />
      <div className={styles.item}>
        {data_product.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>;
        })}
      </div>
    </div>
  )
}

export default RelatedProducts;