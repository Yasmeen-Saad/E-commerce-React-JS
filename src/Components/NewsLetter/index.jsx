import styles from './NewsLetter.module.css';

const NewsLetter = () => {
  return (
    <div className={styles.newsLetter}>
      <h1 className={styles.newsLetterHeading}>Get Exclusive Offers On Your Email</h1>
      <p className={styles.newsLetterPara}>Subscribe to our newsletter and stay updated</p>
      <div className={styles.newsLetterDiv}>
        <input className={styles.newsLetterInput} type="email" placeholder="Enter your email"/>
        <button className={styles.newsLetterBtn}>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
