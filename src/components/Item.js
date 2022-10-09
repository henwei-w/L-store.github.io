
import styles from "./Item.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Item(props) {

  const imgSrc = props.imgSrc
  const productData = props.data
  const path = props.path


  return (
    <div className={`col-6 col-md-4 col-xl-3 ${styles.item}`}>

      <Link to={`/Product_detail/${path[0]}/${path[2]}`}>

        <div className={styles.imgBackground}>

          <img src={ process.env.PUBLIC_URL + imgSrc } alt="..." />

          <div className={styles.itemText}>
            <p>{productData[0]}<br /><span>NT$ {productData[1]}</span></p>
          </div>

        </div>

      </Link>

    </div>
  )
}

export default Item;