import { useContext } from "react";
import styles from "./Style/ShopCategory.module.css";
import {ShopContext} from "../Context";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item";

const ShopCategory = ({banner, category}) => {
  const {all_product} = useContext(ShopContext);

  return (
    <div className={styles.category}>
      <img className={styles.categoryBanner} src={banner} alt="" />
      <div className={styles.indexSort}>
        <p>
          <span className={styles.index}>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className={styles.sort}>
          Sort by <img className={styles.sortIcon} src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className={styles.products}>
        {all_product.map((item, i) => {
          if(category === item.category){
            return <Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price} category={item.category}/>
          } else{
            return null
          }
        })}
      </div>
      <div className={styles.loadMore}>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory;