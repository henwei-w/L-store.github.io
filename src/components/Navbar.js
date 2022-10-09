
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {



  return (
    <nav className={styles.header}>

      <Link to="/" className={styles.logo}><img src={ process.env.PUBLIC_URL + '/icon/logo.png' } alt="..." /></Link>

      <input type="checkbox" id={styles.menuControl} />

      <label htmlFor={styles.menuControl} className={styles.menuBtn} />

      <div className={styles.background}></div>
      <div className={styles.rwdMenu}>

        <label htmlFor={styles.menuControl} className={styles.close} />
        <ul>
          <Link to="/women/上衣"><li>WOMEN</li></Link>
          <Link to="/men/上衣"><li>MEN</li></Link>
          <Link to="/kids/上衣"><li>KIDS</li></Link>
        </ul>
      </div>
      
      <ul className={styles.logIn}>
        <li><Link to="#"><span>6</span><img src={ process.env.PUBLIC_URL + '/icon/shopping-bag.png' } alt="..." /></Link></li>
        <li><Link to="#"><img src={ process.env.PUBLIC_URL + '/icon/user.png' } alt="..." /></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;