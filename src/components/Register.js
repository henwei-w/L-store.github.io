import { useState } from "react";
import styled from "styled-components";
import * as HTTP from "services/api";

const Background = styled.div`
  padding: 30px;
`;

const Wrap = styled.div`
  max-width: 500px;
  margin: auto;
  margin-top: 30px;
  font-size: 1.6rem;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  @media screen and (min-width: 992px) {
    position: relative;
    left: -25px;
  }
`;

const RegisterData = styled.div`
  text-align: end;
  margin-top: 50px;
  margin-right: 25%;
  display: flex;
  flex-direction: column;
  position: relative;

  & label {
    margin-bottom: 15px;
    font-size: 1.1rem;
  }

  & img {
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: calc(5.8rem + 30px);
    right: -30px;
    cursor: pointer;
  }
`;

const RegisterBtn = styled.button`
  position: absolute;
  top: 220px;
  right: 0px;
  width: 15rem;
  height: 3rem;
  font-size: 1.35rem;
  background-color: white;
  border: 2px solid black;

  &:active {
    color: white;
    background-color: rgb(76, 84, 89);
    border: 1.5px solid rgb(76, 84, 89);
  }
`;

const Block = styled.div`
  width: 100%;
  height: 100px;
`;

function Register() {
  const [eye, setEye] = useState("hide");
  const [passwordState, setPasswordState] = useState("password");

  const setEyeState = () => {
    eye === "hide" ? setEye("show") : setEye("hide");
    passwordState === "password"
      ? setPasswordState("text")
      : setPasswordState("password");
  };

  const getFormValue = () => {
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let passwordCheck = document.getElementById("passwordCheck").value;

    let checkArr = [email, username, password, passwordCheck];
    let formState = 0;

    for (let i = 0; i < checkArr.length; i++) {
      if (checkArr[i] === "") {
        alert("尚有未填寫的資料");
        break;
      }
      formState += 1;
    }

    let doubleCheck = () =>
      password === passwordCheck
        ? true
        : (() => {
            formState = 0;
            alert("確認的密碼不一致");
          })();

    formState === 4 ? doubleCheck() : (formState = 0);

    let value;
    formState === 4
      ? (value = { username: username, email: email, password: password })
      : console.log("error");

    formState === 4 ? HTTP.register(value) : console.log("error");
  };

  return (
    <Background>
      <Wrap>
        註冊帳戶
        <RegisterData>
          <label>
            電子郵件：
            <input type="text" name="email" id="email" />
          </label>
          <label>
            帳號：
            <input type="text" name="username" id="username" />
          </label>
          <label>
            密碼：
            <input type={passwordState} name="password" id="password" />
          </label>
          <label>
            再次輸入密碼：
            <input type={passwordState} id="passwordCheck" />
          </label>
          <img
            src={process.env.PUBLIC_URL + `/icon/${eye}.png`}
            alt="..."
            onClick={() => setEyeState()}
          />
          <RegisterBtn type="submit" value="" onClick={() => getFormValue()}>
            確認註冊
          </RegisterBtn>
          <Block />
        </RegisterData>
      </Wrap>
    </Background>
  );
}

export default Register;
