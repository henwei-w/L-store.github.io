import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { cart, set } from "../App";

function Navbar() {
  const cartData = useContext(cart);
  const setAmount = useContext(set);

  const [cartAmount, setCartAmount] = useState(cartData.length);

  setAmount(setCartAmount);

  return (
    <nav className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={process.env.PUBLIC_URL + "/icon/logo.png"} alt="..." />
      </Link>

      <input type="checkbox" id={styles.menuControl} />

      <label htmlFor={styles.menuControl} className={styles.menuBtn} />

      <div
        className={styles.background}
        onClick={() =>
          (document.getElementById(styles.menuControl).checked = false)
        }
      ></div>
      <div className={styles.rwdMenu}>
        <label htmlFor={styles.menuControl} className={styles.close} />
        <ul>
          <Link
            to="/women/上衣"
            onClick={() =>
              (document.getElementById(styles.menuControl).checked = false)
            }
          >
            <li>WOMEN</li>
          </Link>
          <Link
            to="/men/上衣"
            onClick={() =>
              (document.getElementById(styles.menuControl).checked = false)
            }
          >
            <li>MEN</li>
          </Link>
          <Link
            to="/kids/上衣"
            onClick={() =>
              (document.getElementById(styles.menuControl).checked = false)
            }
          >
            <li>KIDS</li>
          </Link>
        </ul>
      </div>

      <ul className={styles.logIn}>
        <li>
          <Link to="/cart">
            <span>{cartAmount}</span>
            <img
              src={process.env.PUBLIC_URL + "/icon/shopping-bag.png"}
              alt="..."
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={process.env.PUBLIC_URL + "/icon/user.png"} alt="..." />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
