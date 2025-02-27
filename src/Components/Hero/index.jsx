import styles from './Hero.module.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_img from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}> 
            <h2 className={styles.heroHeading}>NEW ARRIVALS ONLY</h2>
            <div className={styles.helloHand}>
                <p className={styles.para}>New</p>
                <img className={styles.handIcon} src={hand_icon} alt=''/>
            </div>
            <p className={styles.para}>Collections</p>
            <p className={styles.para}>For Everyone</p>
        <div className={styles.latestBtn}>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt=""/>
        </div>
      </div>
      <div className={styles.heroRight}>
        <img className={styles.heroImg} src={hero_img} alt=""/>
      </div>
    </div>
  )
}

export default Hero;