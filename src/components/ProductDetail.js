import styles from "./ProductDetail.module.css";
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { content, getCart } from "../App";
import ProductMenu from "./ProductMenu";

function ProductDetail() {
  const data = useContext(content);

  const params = useParams();
  const id = params.id;

  let detailContent;
  if (id) {
    detailContent = data[id];
  }

  let menuTitle;
  switch (detailContent.location[0]) {
    case (detailContent.location[0] = "women"):
      menuTitle = ["上衣", "下身", "洋裝", "外套", "配件"];
      break;

    case (detailContent.location[0] = "men"):
      menuTitle = ["上衣", "下身", "外套", "運動服裝", "配件"];
      break;

    case (detailContent.location[0] = "kids"):
      menuTitle = ["上衣", "下身", "外套", "洋裝"];
      break;

    default:
      break;
  }

  let color = detailContent.color;
  let size = detailContent.size;

  const [orderColor, setOrderColor] = useState("");
  const [orderSize, setOrderSize] = useState("");
  const [total, setTotal] = useState(1);

  let order = {
    id: detailContent.id,
    name: detailContent.name,
    img: detailContent.img,
    price: detailContent.price,
    color: orderColor,
    size: orderSize,
    total: total,
  };

  const orderState = orderColor && orderSize && "ready";

  const setCartData = useContext(getCart);

  let localCart = JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const [orderValue, setOrderValue] = useState(false);

  function setCart() {
    localCart.push(order);
    setCartData(localCart, localCart.length);
    localStorage.setItem("cart", JSON.stringify(localCart));
    setOrderValue(true);
  }

  function set(e) {
    orderState
      ? setCart() || alert("成功加入購物車")
      : alert("請選擇顏色及尺寸") || cancel(e);
  }

  const cancel = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <ProductMenu path={detailContent.location[0]} menu={menuTitle} />

      <div className={styles.detail}>
        <div className={styles.imgBackground}>
          <img src={process.env.PUBLIC_URL + detailContent.img} alt="..." />
        </div>

        <div className={styles.wrap}>
          <div className={styles.text}>
            <h1>{detailContent.name}</h1>
            <h2>{`NT$ ${detailContent.price}`}</h2>

            <form>
              <div className={styles.option}>
                顏色：
                {color.map((data, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      name="color"
                      key={`${index}c`}
                      id={`styles.${index}color`}
                      className={styles.colorControl}
                    />
                    <label
                      onClick={() => setOrderColor(data[1])}
                      key={`${index}ckey`}
                      htmlFor={`styles.${index}color`}
                      className={styles.color}
                      style={{ backgroundColor: data[0] }}
                    />
                  </div>
                ))}
              </div>

              <div className={styles.option}>
                尺寸：
                {size.map((data, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      name="size"
                      key={`${index}s`}
                      id={`styles.${index}size`}
                      className={styles.sizeControl}
                    />
                    <label
                      onClick={() => setOrderSize(data)}
                      key={`${index}skey`}
                      htmlFor={`styles.${index}size`}
                      className={styles.size}
                    >
                      {data}
                    </label>
                  </div>
                ))}
              </div>
            </form>

            <div className={styles.option}>
              數量：{" "}
              <p
                onClick={() =>
                  total > 0 ? setTotal(total - 1) : setTotal(total)
                }
              >
                -
              </p>
              <span>{total}</span>
              <p onClick={() => setTotal(total + 1)}>+</p>
            </div>
          </div>

          <ul className={styles.button}>
            <Link to="#" onClick={() => set()}>
              <li>加入購物車</li>
            </Link>
            <Link
              to="/cart"
              onClick={(e) => (orderValue ? console.log("success") : set(e))}
            >
              <li>立即購買</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
