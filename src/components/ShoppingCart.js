import styles from "./ShoppingCart.module.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { cart, changeAmount } from "../App";

function ShoppingCart() {
  const orderData = useContext(cart);
  const setAmount = useContext(changeAmount);

  const [cartDataList, setCartDataList] = useState(orderData);

  useEffect(() => {
    setCartDataList(JSON.parse(localStorage.getItem("cart")));
  }, []);

  const setTotal = (index, value) => {
    let newState = [...cartDataList];
    newState[index].total = value
      ? cartDataList[index].total + 1
      : cartDataList[index].total - 1;
    setCartDataList(newState);
    localStorage.setItem("cart", JSON.stringify(cartDataList));
  };

  const deleteOrder = (index) => {
    let newState = [...cartDataList];
    newState.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(newState));
    setAmount(newState.length);
    setCartDataList(newState);
  };

  const finalTotal = () => {
    let finalPrice = 0;
    cartDataList.map((data) => (finalPrice += data.price * data.total));
    return finalPrice;
  };

  const setLocation = (data) => {
    let type;
    let location = `${type}/${data.id.slice(2, 4)}`;

    switch (data.id) {
      case data.id.slice(0, 1) === "w":
        type = "women";
        break;

      case data.id.slice(0, 1) === "m":
        type = "men";
        break;

      case data.id.slice(0, 1) === "k":
        type = "kids";
        break;

      default:
        break;
    }

    return location;
  };

  return (
    <div className={styles.background}>
      <div className={styles.shoppingCart}>
        <input type="checkbox" id={styles.edit} />
        <label htmlFor={styles.edit} className={styles.editButton}>
          編輯
        </label>

        {cartDataList.map((data, index) => (
          <div
            key={index}
            className={styles.deleteCover}
            style={{
              width: "8rem",
              height: "5rem",
              backgroundColor: "white",
              position: "absolute",
              top: `calc(30px + 1.6rem + ${132 * index}px)`,
              right: "10px",
              zIndex: "20",
            }}
          />
        ))}

        <form>
          <ul>
            {cartDataList.map((data, index) => (
              <li key={index} className={styles.list}>
                <Link to={`/Product_detail/${setLocation(data)}`}>
                  <div className={styles.imgBackground}>
                    <img src={process.env.PUBLIC_URL + data.img} alt="..." />
                  </div>
                </Link>

                <div className={styles.text}>
                  <div className={styles.name}>{data.name}</div>
                  <div className={styles.color}>顏色：{data.color}</div>
                  <div className={styles.size}>尺寸：{data.size}</div>
                  <div className={styles.total}>
                    數量：
                    <p
                      onClick={() =>
                        data.total > 1
                          ? setTotal(index, false)
                          : deleteOrder(index)
                      }
                    >
                      -
                    </p>
                    <h1>{data.total}</h1>
                    <p onClick={() => setTotal(index, true)}>+</p>
                    <h2>NT$ {data.price * data.total}</h2>
                  </div>
                </div>

                <div
                  onClick={() => deleteOrder(index)}
                  className={styles.delete}
                >
                  刪除
                </div>
              </li>
            ))}
          </ul>
        </form>

        <div className={styles.finalPrice}>總金額： NT$ {finalTotal()}</div>
        <Link to="" className={styles.pay}>
          前往付款
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCart;
