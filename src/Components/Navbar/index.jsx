import styles from './Navbar.module.css';
import cart_icon from '../Assets/cart_icon.png';
import { useContext, useState } from 'react';
import routes from './Routes';
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context';

const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className={styles.navbar}>
      <div>
        <p className={styles.navLogo}>VOGUE</p>
      </div>
      <ul className={styles.navMenu}>
        {routes.map((route)=>{
            return(
                <li key={route.href}>
                    <NavLink to={route.href} className={styles.navMenuLi} onClick={() => setMenu(route.label)}>
                        {route.label}
                        {menu === route.label ? <hr className={styles.hr}/> : null}
                    </NavLink>
                </li>
            )
        })}
      </ul>
      <div className={styles.navLoginCart}>
        <NavLink to="/login">
            <button className={styles.loginBtn}>Login</button>
        </NavLink>
        <NavLink to="/cart">
            <img src={cart_icon} alt="cart-icon" className={styles.cartIcon}/>
        </NavLink>
        <div className={styles.cartCount}>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar;