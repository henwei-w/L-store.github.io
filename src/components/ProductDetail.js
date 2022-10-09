
import styles from "./ProductDetail.module.css";
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import styled from "styled-components";
import { content } from "../App";
import ProductMenu from "./ProductMenu";

function ProductDetail() {

  const data = useContext(content)

  const params = useParams()
  const id = params.id



  let detailContent;
  if(id){
    detailContent = data[id]
  };



  let menuTitle;
  switch(detailContent.location[0]){
    case detailContent.location[0] = "women":
      menuTitle = ["上衣","下身","洋裝","外套","配件"]
      break;
    
    case detailContent.location[0] = "men":
      menuTitle = ["上衣","下身","外套","運動服裝","配件"]
      break;

    case detailContent.location[0] = "kids":
      menuTitle = ["上衣","下身","外套","洋裝"]
      break;

    default:
      break;
  }

  let color = detailContent.color
  let size = detailContent.size


  const [total, setTotal] = useState(1);

  let order = {
    color: "",
    size: "",
    total: total
  }



  return (
    <>
      <ProductMenu path={detailContent.location[0]} menu={menuTitle} />

      <div className={styles.detail}>

        <div className={styles.imgBackground}>
          <img src={ process.env.PUBLIC_URL + detailContent.img } alt="..." />
        </div>

        <div className={styles.wrap}>

          <div className={styles.text}>
            <h1>{detailContent.name}</h1>
            <h2>{`NT$ ${detailContent.price}`}</h2>

            <form>
              <div className={styles.option}>
                顏色：{color.map((data,index) => <div key={index}>
                                                  <input type="radio" name="color" key={`${index}c`} id={`styles.${index}color`} className={styles.colorControl} />
                                                  <label onClick={function(){order.color = data[1];console.log(order)}} key={`${index}ckey`} htmlFor={`styles.${index}color`} className={styles.color} style={{backgroundColor: data[0]}} />
                                                </div>
                                                )}
              </div>
            </form>

            <form>
              <div className={styles.option}>
                尺寸：{size.map((data,index) => <div key={index}>
                                                  <input type="radio" name="size" key={`${index}s`} id={`styles.${index}size`} className={styles.sizeControl} />
                                                  <label onClick={function(){order.size = data;console.log(data)}} key={`${index}skey`} htmlFor={`styles.${index}size`} className={styles.size}>{data}</label>
                                                </div>
                                                )}
              </div>
            </form>

            <div className={styles.option}>
              數量： <p onClick={function(){ total>0 ? setTotal(total - 1) : setTotal(total) }}>-</p><span>{total}</span><p onClick={function(){setTotal(total + 1)}}>+</p>
            </div>

          </div>

          <ul className={styles.button}>
            <Link to="#"><li>加入購物車</li></Link>
            <Link to="#"><li>立即購買</li></Link>
          </ul>

        </div>  

      </div>
    </>
  )
}

export default ProductDetail;