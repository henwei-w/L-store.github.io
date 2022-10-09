
import styles from "./Content.module.css";
import React, { useContext } from "react";
import Product from "./Product";
import { content } from "../App.js"

function Content() {

  const data = useContext(content)


  return (
    <div className={styles.content}>

      <div className={styles.event}>

        <div className={styles.eventTitle}>開幕滿額禮</div>
        <div className={styles.itemBackground}>
          <div className={styles.eventItem}>
            <img src={ process.env.PUBLIC_URL + '/image/event-img.jpg' } alt="..." />
            <div className={styles.eventText}>
              <p>全館滿2000元<br/>即送造型帆布托特包</p>
            </div>
          </div>
        </div>

      </div>

      <Product title={"新品上市"} data={[data[0],data[1],data[2],data[10],data[13],data[14],data[15],data[16]]} />

      <Product title={"熱銷商品"} data={[data[4],data[5],data[6],data[7],data[12],data[17],data[18],data[19]]} />

    </div>
  )
}

export default Content;