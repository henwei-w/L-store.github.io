import { useState } from "react";
import TypeMenu from "components/TypeMenu";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { addOrder } from "../../reducer/cartDataSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ScrollToTop from "helpers/ScrollToTop";
import Modal from "react-bootstrap/Modal";

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

const CustomButton = styled.ul`
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
    background-color: rgb(235, 235, 235);
    margin: 0px 10px;
    border: 2.5px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 1px 1px rgb(120, 120, 120);

    &:active {
      box-shadow: inset 0 0 3px 3px rgb(120, 120, 120);
    }
  }

  @media screen and (min-width: 992px) {
    margin-top: 36%;
  }
`;

const CustomModalBody = styled(Modal.Body)`
  padding: 50px;
  font-size: 1.3rem;
  text-align: center;
`;

const cartAnime = keyframes`
  0% {
    opacity: 0.8;
    top: ${(props) => props.animePosition.top}px;
    right: ${(props) => props.animePosition.right}px;
  }
  50% {
    opacity: 0.8;
    top: 150px;
    right: 60vw;
  }
  100% {
    opacity: 0.8;
    top: 0px;
    right: 30vw;
  }
`;

const cartAnimeMobile = keyframes`
  0% {
    opacity: 0.8;
    top: ${(props) => props.animePosition.top}px;
    right: ${(props) => props.animePosition.right}px;
  }
  50% {
    opacity: 0.8;
    top: 150px;
    right: 40vw;
  }
  100% {
    opacity: 0.8;
    top: 0px;
    right: 10vw;
  }
`;

const CartAnimeImg = styled.img`
  width: 50px;
  height: 75px;
  opacity: 0;
  position: fixed;
  top: ${(props) => props.animePosition.top}px;
  right: ${(props) => props.animePosition.right}px;
  animation: ${(props) => (props.animeState === "action" ? cartAnime : false)}
    0.35s linear;

  @media screen and (min-width: 576px) {
    animation: ${(props) =>
        props.animeState === "action" ? cartAnimeMobile : false}
      0.35s linear;
  }
`;

function Detail(props) {
  const dispatch = useDispatch();

  const productData = props.data;

  const [orderColor, setOrderColor] = useState("");
  const [orderSize, setOrderSize] = useState("");
  const [total, setTotal] = useState(1);
  const [orderValue, setOrderValue] = useState(false);

  const params = useParams();

  const data = params.id
    ? productData.find((item) => item.id === parseInt(params.id))
    : undefined;

  const genderMenuTitle = {
    women: ["上衣", "下身", "洋裝", "外套", "配件"],
    men: ["上衣", "下身", "外套", "運動服裝", "配件"],
    kids: ["上衣", "下身", "外套", "洋裝"],
  };

  const menuTitle = genderMenuTitle[data.gender] || [];

  let order = {
    id: data.id,
    gender: data.gender,
    name: data.name,
    img: data.img,
    price: data.price,
    color: orderColor,
    size: orderSize,
    total: total,
  };

  const cancel = (e) => {
    e.preventDefault();
  };

  function set(e, order) {
    const setCart = (order) => {
      dispatch(addOrder(order));
      setOrderValue(true);
    };
    orderState
      ? setCart(order) || handleShow("成功加入購物車", e)
      : handleShow("請選擇顏色及尺寸", e) || cancel(e);
  }

  const orderState = orderColor && orderSize && "ready";

  const [show, setShow] = useState(false);
  const [alertState, setAlertState] = useState();
  const [animePosition, setAnimePosition] = useState({
    top: "0px",
    right: "0px",
  });
  const [animeState, setAnimeState] = useState("static");

  const handleClose = () => setShow(false);
  const handleShow = (parameter, e) => {
    setAnimePosition({
      top: e.clientY,
      right: document.body.clientWidth - e.clientX
    });
    parameter === "成功加入購物車"
      ? setAnimeState("action")
      : setAnimeState("static");
    setTimeout(() => {
      setAnimeState("static");
      setShow(true);
    }, 355);
    setAlertState(parameter);
  };

  return (
    <>
      <ScrollToTop />
      <TypeMenu path={data.gender} menu={menuTitle} />

      <Modal show={show} onHide={handleClose} centered>
        <CustomModalBody>{alertState}</CustomModalBody>
      </Modal>

      <DetailContainer>
        <DetailWrap>
          <ImgBackground>
            <img
              src={`${process.env.REACT_APP_API_URL}/uploads/${data.img}`}
              alt="..."
            />
          </ImgBackground>

          <Wrap>
            <Text>
              <h1>{data.name}</h1>
              <h2>{`NT$ ${data.price}`}</h2>

              <form>
                <Option>
                  顏色：
                  {JSON.parse(data.colors).map((data, index) => (
                    <div key={index}>
                      <ColorControl
                        type="radio"
                        name="color"
                        key={`c${index}`}
                        id={`color${index}`}
                      />
                      <Color
                        onClick={() => setOrderColor(data.name)}
                        key={`ckey${index}`}
                        htmlFor={`color${index}`}
                        style={{ backgroundColor: data.rgb }}
                      />
                    </div>
                  ))}
                </Option>

                <Option>
                  尺寸：
                  {JSON.parse(data.size).map((data, index) => (
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
                    total > 1 ? setTotal(total - 1) : setTotal(total)
                  }
                >
                  -
                </p>
                <span>{total}</span>
                <p onClick={() => setTotal(total + 1)}>+</p>
              </Option>
            </Text>

            <CustomButton>
              <Link to="#" onClick={(e) => set(e, order)}>
                <li>加入購物車</li>
                <div>
                  <CartAnimeImg
                    src={`${process.env.REACT_APP_API_URL}/uploads/${data.img}`}
                    alt="..."
                    animePosition={animePosition}
                    animeState={animeState}
                  />
                </div>
              </Link>

              <Link
                to="/cart"
                onClick={(e) =>
                  orderValue ? console.log("success") : set(e, order)
                }
              >
                <li>立即購買</li>
              </Link>
            </CustomButton>
          </Wrap>
        </DetailWrap>
      </DetailContainer>
    </>
  );
}

export default Detail;
