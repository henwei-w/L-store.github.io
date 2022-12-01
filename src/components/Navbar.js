import { Link } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { removeToken } from "../reducer/userStateSlice";

const Header = styled.nav`
  display: flex;
  background: linear-gradient(to top, rgb(236, 236, 236), white);
  width: 100vw;
  height: 66px;
  position: fixed;
  top: 0px;
  z-index: 25;

  & a {
    text-decoration: none;
    color: black;
  }
`;

const Logo = styled(Link)`
  margin-left: 50px;

  & img {
    width: 100px;
    height: 50px;
    margin-top: 5px;
  }
`;

const MenuControl = styled.input`
  position: absolute;
  top: -100%;
  display: none;

  &:checked ~ .rwdMenu {
    right: 0px;
    z-index: 35;
  }

  &:checked ~ .background {
    left: 0px;
  }
`;

const MenuBtn = styled.label`
  height: 46px;
  width: 46px;
  border-radius: 5px;
  position: absolute;
  right: 20px;
  top: 10px;
  cursor: pointer;

  &::before {
    content: "";
    background-color: black;
    height: 4px;
    width: 38px;
    position: absolute;
    left: 2px;
    top: 0px;
    bottom: 0px;
    margin: auto;
    box-shadow: 0px 11px black, 0px -11px black;
    border-radius: 50px;
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const Background = styled.div.attrs({ className: "background" })`
  width: 100vw;
  height: 100vh;
  background-color: darkgray;
  opacity: 0.6;
  position: absolute;
  left: -100%;
  z-index: 28;
`;

const RwdMenu = styled.div.attrs({ className: "rwdMenu" })`
  width: 65vw;
  height: 100vh;
  background-color: rgb(245, 245, 247);
  position: absolute;
  right: -100%;
  transition: 0.5s;
  z-index: 30;

  @media screen and (min-width: 992px) {
    position: absolute;
    left: 41%;
    top: -66px;
    width: auto;
    height: auto;
    background-color: transparent;
  }

  & ul {
    padding: 0px 6px;
    margin-top: 66px;

    @media screen and (min-width: 992px) {
      display: flex;
      padding: 0px;
    }
  }

  & li {
    font-size: 1.2rem;
    border-bottom: 2px solid gray;
    padding: 12px;

    @media screen and (min-width: 992px) {
      padding: 0px 15px;
      border-bottom: 0;
      height: 66px;
      display: flex;
      align-items: center;

      &:hover {
        border-bottom: 3px solid black;
      }
    }
  }

  & li:active {
    text-shadow: 3px 3px 6px rgb(36, 36, 36);
  }
`;

const Close = styled.label.attrs({ className: "close" })`
  position: relative;
  width: 100%;
  cursor: pointer;

  &::before,
  ::after {
    content: "";
    background-color: black;
    width: 35px;
    height: 3px;
    position: absolute;
    right: 20px;
    top: 15px;
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const LogIn = styled.ul`
  display: flex;
  position: absolute;
  right: 85px;
  top: 17px;
  z-index: 30;

  & span {
    width: 32px;
    height: 32px;
    text-align: center;
    margin: auto;
    position: absolute;
    right: 0px;
    top: 0px;
    padding-top: 12px;
    font-size: 18px;
    font-weight: bolder;
  }

  li {
    position: relative;
    margin-left: 20px;
  }

  @media screen and (min-width: 992px) {
    right: 30px;
  }
`;

const CustomDropdownToggle = styled(Dropdown.Toggle)`
  background: 0;
  border: 0;
  border-radius: 0;
  padding: 0;
  position: relative;
  top: 0;

  &:hover {
    background: 0;
  }

  &:active {
    color: 0;
    background-color: 0;
  }

  &::after {
    display: none;
  }
`;

const CustomDropDownMenu = styled(Dropdown.Menu)`
  border-radius: 3;
  font-size: 1.2rem;
  padding: 10px 10px;
`;

const CustomDropDownItem = styled(Dropdown.Item)`
  border-bottom: 1px solid white;
  margin: 5px auto;

  &:hover {
    background-color: white;
    border-bottom: 1px solid black;
  }

  &:active {
    background-color: white;
  }
`;

function Navbar() {
  const cartAmount = useSelector((state) => state.cartData.value.amount);

  const user = useSelector((state) => state.userState.value.data);
  const username = useSelector((state) => state.userState.value.username);
  const dispatch = useDispatch();

  const [icon, setIcon] = useState("");
  const [path, setPath] = useState("");
  const [item, setItem] = useState("");
  const [name, setName] = useState("");
  const [logoutItem, setLogoutItem] = useState("");

  useEffect(() => {
    if (user) {
      setIcon("user-logout");
      setPath("#/backstage/product");
      setItem("後台管理系統");
      setName(<CustomDropDownItem>{username}</CustomDropDownItem>);
      setLogoutItem(
        <CustomDropDownItem onClick={() => dispatch(removeToken())}>
          登出
        </CustomDropDownItem>
      );
    } else {
      setIcon("user");
      setPath("#/account");
      setItem("登入");
      setName("");
      setLogoutItem("");
    }
  }, [user, username, dispatch]);

  return (
    <Header>
      <Logo to="/">
        <img src={process.env.PUBLIC_URL + "/icon/logo.png"} alt="..." />
      </Logo>

      <MenuControl type="checkbox" id="menuControl" />

      <MenuBtn htmlFor="menuControl" />

      <Background
        onClick={() => (document.getElementById("menuControl").checked = false)}
      />
      <RwdMenu>
        <Close htmlFor="menuControl" />
        <ul>
          <Link
            to="/women/上衣"
            onClick={() =>
              (document.getElementById("menuControl").checked = false)
            }
          >
            <li>WOMEN</li>
          </Link>
          <Link
            to="/men/上衣"
            onClick={() =>
              (document.getElementById("menuControl").checked = false)
            }
          >
            <li>MEN</li>
          </Link>
          <Link
            to="/kids/上衣"
            onClick={() =>
              (document.getElementById("menuControl").checked = false)
            }
          >
            <li>KIDS</li>
          </Link>
        </ul>
      </RwdMenu>

      <LogIn>
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
          <Dropdown>
            <CustomDropdownToggle variant="link" id="dropdown-basic">
              <img
                src={process.env.PUBLIC_URL + `/icon/${icon}.png`}
                alt="..."
              />
            </CustomDropdownToggle>

            <CustomDropDownMenu>
              {name}
              <CustomDropDownItem href={path}>{item}</CustomDropDownItem>
              {logoutItem}
            </CustomDropDownMenu>
          </Dropdown>
        </li>
      </LogIn>
    </Header>
  );
}

export default Navbar;
