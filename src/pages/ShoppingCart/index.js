import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteOrder,
  incrementOrderTotal,
  decrementOrderTotal,
  sort,
} from "../../reducer/cartDataSlice";
import ScrollToTop from "helpers/ScrollToTop";

const Background = styled.div`
  padding: 0px 20px;
  margin-bottom: 10px;
`;

const Cart = styled.div`
  margin: 100px auto 120px;
  max-width: 800px;
  position: relative;
`;

const Edit = styled.input`
  display: none;

  &:checked ~ .deleteCover {
    display: none;
  }
`;

const EditButton = styled.label`
  font-size: 1.6rem;
  padding: 6px 10px 5px;
  margin-bottom: 10px;
  border: 1.5px solid black;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  border-radius: 6px;
  box-shadow: 0 0 3px 0.33px rgb(50, 50, 50);

  &:active {
    box-shadow: 0 0 3px 0.33px white;
  }
`;

const DeleteCover = styled.div.attrs({ className: "deleteCover" })`
  ${(props) => css`
    width: 8rem;
    height: 5rem;
    background-color: white;
    position: absolute;
    top: calc(30px + 1.6rem + 136 * ${props.according}px);
    right: 10px;
    z-index: 20;
  `}
`;

const List = styled.li`
  display: flex;
  position: relative;
  border-top: 2px dotted black;
  border-bottom: 2px dotted black;
  margin-bottom: -2px;
  background-color: white;
  z-index: 15;
`;

const ImgBackground = styled.div`
  width: 0;
  max-width: 100px;
  min-width: 90px;
  height: 132px;
  margin: auto;

  & img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const Text = styled.div`
  margin-left: 20px;
  padding-top: 0.58rem;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  & div {
    cursor: default;
    margin-top: 8px;
    font-size: 1.35rem;
  }
`;

const Name = styled.div`
  margin-bottom: 1rem;
`;

const Total = styled.div`
  display: flex;

  & p {
    margin: 0px 5px;
    cursor: pointer;
    font-size: 1.8rem;
    position: relative;
    top: -0.28rem;
  }

  & h1 {
    cursor: default;
    font-size: 1.8rem;
    position: relative;
    top: -0.2rem;
  }

  & h2 {
    position: absolute;
    right: 5%;
  }
`;

const Delete = styled.div`
  font-size: 1.6rem;
  width: 5rem;
  height: 2.3rem;
  padding-top: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(216, 120, 120);
  cursor: pointer;
  position: absolute;
  top: 15%;
  right: 5%;
  border-radius: 6px;
  box-shadow: 0 0 3px 0.33px rgb(149, 8, 9);

  &:active {
    box-shadow: 0 0 3px 0.33px white;
  }
`;

const FinalPrice = styled.div`
  cursor: default;
  font-size: 1.8rem;
  margin-top: 30px;
  width: 100%;
  text-align: end;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
`;

const Pay = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.6rem;
  position: relative;
  left: calc(100% - 6.4rem - 45px);
  top: 65px;
  padding: 10px 20px;
  border: 2.5px solid black;
  border-radius: 6px;
  box-shadow: 0 0 3.5px 1px rgb(50, 50, 50);

  &:hover {
    color: black;
  }

  &:active {
    box-shadow: 0 0 3.5px 1px white;
  }
`;

const CustomDropdown = styled(Dropdown)`
  position: absolute;
  top: 0px;
  right: 0px;
`;

const CustomDropdownToggle = styled(Dropdown.Toggle)`
  font-size: 1.2rem;
  color: black;
  background-color: white;
  border: 1.5px solid black;
  border-radius: 6px;
  box-shadow: 0 0 3px 0.33px rgb(50, 50, 50);

  &:hover {
    color: black;
    background-color: white;
  }

  &:active {
    color: black !important;
    background-color: white !important;
    box-shadow: 0 0 3px 0.33px white;
  }
`;

const Empty = styled.div`
  width: 100%;
  height: 132px;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Ul = styled.ul`
  min-height: 132px;
  margin-top: -132px;
`;

function ShoppingCart() {
  const dispatch = useDispatch();

  const cartDataList = useSelector((state) => state.cartData.value.data);

  const setTotal = (index, value) => {
    value
      ? dispatch(incrementOrderTotal(index))
      : dispatch(decrementOrderTotal(index));
  };

  const deleteFunc = (index) => {
    dispatch(deleteOrder(index));
  };

  const finalTotal = () => {
    let finalPrice = 0;
    cartDataList.map((data) => (finalPrice += data.price * data.total));
    return finalPrice;
  };

  const setLocation = (data) => {
    let location = `${data.gender}/${data.id}`;
    return location;
  };

  const reSort = (value) => {
    dispatch(sort(value));
  };

  return (
    <Background>
      <ScrollToTop />
      <Cart>
        <Edit type="checkbox" id="edit" />
        <EditButton htmlFor="edit">編輯</EditButton>

        <CustomDropdown>
          <CustomDropdownToggle variant="secondary" id="dropdown-basic">
            排序
          </CustomDropdownToggle>

          <Dropdown.Menu>
            <Dropdown.Item as="button" onClick={() => reSort(true)}>
              價格 ↑
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => reSort(false)}>
              價格 ↓
            </Dropdown.Item>
          </Dropdown.Menu>
        </CustomDropdown>

        {cartDataList.map((data, index) => (
          <DeleteCover key={`delete${index}`} according={index} />
        ))}

        <form>
          <Empty>購物車目前沒有商品唷～</Empty>
          <Ul>
            {cartDataList.map((data, index) => (
              <List key={index} according={index}>
                <Link to={`/Product_detail/${setLocation(data)}`}>
                  <ImgBackground>
                    <img
                      src={`${process.env.REACT_APP_API_URL}/uploads/${data.img}`}
                      alt="..."
                    />
                  </ImgBackground>
                </Link>

                <Text>
                  <Name>{data.name}</Name>
                  <div>顏色：{data.color}</div>
                  <div>尺寸：{data.size}</div>
                  <Total>
                    數量：
                    <p
                      onClick={() =>
                        data.total > 1
                          ? setTotal(index, false)
                          : deleteFunc(index)
                      }
                    >
                      -
                    </p>
                    <h1>{data.total}</h1>
                    <p onClick={() => setTotal(index, true)}>+</p>
                    <h2>NT$ {data.price * data.total}</h2>
                  </Total>
                </Text>

                <Delete onClick={() => deleteFunc(index)}>刪除</Delete>
              </List>
            ))}
          </Ul>
        </form>

        <FinalPrice>總金額： NT$ {finalTotal()}</FinalPrice>
        {finalTotal() !== 0 ? <Pay to="/info">購買商品</Pay> : false}
      </Cart>
    </Background>
  );
}

export default ShoppingCart;
