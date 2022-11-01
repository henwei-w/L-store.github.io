import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { content, getCart } from "../App";
import ProductMenu from "./ProductMenu";
import styled from "styled-components";

const DetailContainer = styled.div`
  width: 100%;
  padding: 50px 10px;
  z-index: 10;
`;

const DetailWrap = styled.div`
  margin: auto;
  max-width: 1200px;

  @media screen and (min-width: 992px) {
    display: flex;
    padding: 50px 12%;
  }
`;

const ImgBackground = styled.div`
  width: 0;
  max-width: 333px;
  min-width: 300px;
  height: 0;
  max-height: 500px;
  min-height: 450px;
  margin: auto;

  & img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const Wrap = styled.div`
  margin-top: 50px;

  @media screen and (min-width: 992px) {
    margin-left: 8%;
    margin-top: 0px;
  }
`;

const Text = styled.div`
  font-size: 1.3rem;
  line-height: 2rem;
  margin-top: 20px;
  margin-left: 58px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  & h1 {
    font-size: 1.5rem;
    margin-bottom: 10px;

    @media screen and (min-width: 992px) {
      margin-bottom: 20px;
    }
  }

  & h2 {
    font-size: 1.5rem;
    margin-top: 10px;
    margin-bottom: 20px;

    @media screen and (min-width: 992px) {
      margin-bottom: 35px;
    }
  }
`;

const Option = styled.div`
  margin-bottom: 10px;
  display: flex;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  & p {
    width: 1.8rem;
    height: 1.5rem;
    font-size: 1.6rem;
    text-align: center;
    cursor: pointer;
  }

  & span {
    width: 1.8rem;
    height: 1.5rem;
    font-size: 1.6rem;
    margin-top: 0.1rem;
    text-align: center;
    cursor: default;
  }
`;

const ColorControl = styled.input`
  position: absolute;
  top: -100%;
  display: none;

  &:checked ~ .color {
    border: 2px solid rgb(100, 100, 100);
    box-shadow: 0 0 0 2px darkgray;
  }
`;

const Color = styled.label.attrs({ className: "color" })`
  width: 1.6rem;
  height: 1.6rem;
  margin-top: 0.136rem;
  margin-right: 1.2rem;
  cursor: pointer;
`;

const SizeControl = styled.input`
  position: absolute;
  top: -100%;
  display: none;

  &:checked ~ .size {
    border: 2px solid rgb(100, 100, 100);
    box-shadow: 0 0 0 2px darkgray;
  }
`;

const Size = styled.label.attrs({ className: "size" })`
  width: 2rem;
  height: 2rem;
  margin-top: 0.036rem;
  margin-right: 1.2rem;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  & a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
  }

  & li {
    width: 11rem;
    height: 3.5rem;
    margin: 0px 10px;
    border: 2.5px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 992px) {
    margin-top: 36%;
  }
`;

function ProductDetail() {
  const data = useContext(content);

  const params = useParams();
  const id = params.id;

  let detailContent;
  if (id) {
    detailContent = data[id.slice(1, 3) - 1];
  }

  let menuTitle;
  switch (detailContent.location) {
    case (detailContent.location = "women"):
      menuTitle = ["上衣", "下身", "洋裝", "外套", "配件"];
      break;

    case (detailContent.location = "men"):
      menuTitle = ["上衣", "下身", "外套", "運動服裝", "配件"];
      break;

    case (detailContent.location = "kids"):
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
    location: detailContent.location,
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

  const cancel = (e) => {
    e.preventDefault();
  };

  function set(e) {
    orderState
      ? setCart() || alert("成功加入購物車")
      : alert("請選擇顏色及尺寸") || cancel(e);
  }

  return (
    <>
      <ProductMenu path={detailContent.location} menu={menuTitle} />

      <DetailContainer>
        <DetailWrap>
          <ImgBackground>
            <img src={process.env.PUBLIC_URL + detailContent.img} alt="..." />
          </ImgBackground>

          <Wrap>
            <Text>
              <h1>{detailContent.name}</h1>
              <h2>{`NT$ ${detailContent.price}`}</h2>

              <form>
                <Option>
                  顏色：
                  {color.map((data, index) => (
                    <div key={index}>
                      <ColorControl
                        type="radio"
                        name="color"
                        key={`c${index}`}
                        id={`color${index}`}
                      />
                      <Color
                        onClick={() => setOrderColor(data[1])}
                        key={`ckey${index}`}
                        htmlFor={`color${index}`}
                        style={{ backgroundColor: data[0] }}
                      />
                    </div>
                  ))}
                </Option>

                <Option>
                  尺寸：
                  {size.map((data, index) => (
                    <div key={index}>
                      <SizeControl
                        type="radio"
                        name="size"
                        key={`s${index}`}
                        id={`size${index}`}
                      />
                      <Size
                        onClick={() => setOrderSize(data)}
                        key={`skey${index}`}
                        htmlFor={`size${index}`}
                      >
                        {data}
                      </Size>
                    </div>
                  ))}
                </Option>
              </form>

              <Option>
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
              </Option>
            </Text>

            <Button>
              <Link to="#" onClick={() => set()}>
                <li>加入購物車</li>
              </Link>
              <Link
                to="/cart"
                onClick={(e) => (orderValue ? console.log("success") : set(e))}
              >
                <li>立即購買</li>
              </Link>
            </Button>
          </Wrap>
        </DetailWrap>
      </DetailContainer>
    </>
  );
}

export default ProductDetail;
