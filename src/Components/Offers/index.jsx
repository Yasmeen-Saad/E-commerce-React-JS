import styles from './Offers.module.css';
import exclusive from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className={styles.offers}>
      <div className={styles.offersLeft}>
        <h1 className={styles.leftHeading}>Exclusive</h1>
        <h1 className={styles.leftHeading}>Offers For You</h1>
        <p className={styles.leftPara}>ONLY ON BEST SELLER PRODUCTS</p>
        <button className={styles.leftBtn}>Check Now</button>
      </div>
      <div className={styles.offersRight}>
        <img className={styles.offersImg} src={exclusive} alt="" />
      </div>
    </div>
  )
}

export default Offers
