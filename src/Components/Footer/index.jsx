import styles from './Footer.module.css';
import logo from '../Assets/logo.jpg';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}>
        <img className={styles.footerLogoImg} src={logo} alt="" />
        <p className={styles.footerLogoText}>VOGUE</p>
      </div>
      <ul className={styles.footerLinks}>
        <li className={styles.linksLi}>Company</li>
        <li className={styles.linksLi}>Products</li>
        <li className={styles.linksLi}>Offices</li>
        <li className={styles.linksLi}>About</li>
        <li className={styles.linksLi}>Contact</li>
      </ul>
      <div className={styles.socialIcons}>
        <div className={styles.iconsContainer}>
            <img src={instagram_icon} alt="" />
        </div>
        <div className={styles.iconsContainer}>
            <img src={pinterest_icon} alt="" />
        </div>
        <div className={styles.iconsContainer}>
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className={styles.copyright}>
        <hr className={styles.copyrightHr}/>
        <p>Copyright @ 2025 - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;