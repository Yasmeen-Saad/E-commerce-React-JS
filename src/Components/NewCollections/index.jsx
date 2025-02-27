import styles from './NewCollections.module.css';
import new_collection from '../Assets/new_collections';
import Item from '../Item';

const NewCollecions = () => {
  return (
    <div className={styles.newCollections}>
      <h1 className={styles.newCollectionsHeading}>NEW COLLECTIONS</h1>
      <hr className={styles.newCollectionsHr}/>
      <div className={styles.collections}>
        {new_collection.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollecions
