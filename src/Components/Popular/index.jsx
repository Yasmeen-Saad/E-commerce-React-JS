import styles from "./popular.module.css";
import data_product from "../Assets/data";
import Item from "../Item";

const Popular = () => {
  return (
    <div className={styles.popular}>
      <h1 className={styles.popularHeading}>POPULAR IN WOMEN</h1>
      <hr className={styles.popularHr}/>
      <div className={styles.popularItem}>
        {data_product.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
