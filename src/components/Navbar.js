import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { cart, set } from "../App";
import styled from "styled-components";

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

function Navbar() {
  const cartData = useContext(cart);
  const setAmount = useContext(set);

  const [cartAmount, setCartAmount] = useState(cartData.length);

  setAmount(setCartAmount);

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
          <Link to="/account">
            <img src={process.env.PUBLIC_URL + "/icon/user.png"} alt="..." />
          </Link>
        </li>
      </LogIn>
    </Header>
  );
}

export default Navbar;
