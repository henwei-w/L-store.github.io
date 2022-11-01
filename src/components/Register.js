
import { useState } from "react";
import styled from "styled-components";
import axios, {isCancel, AxiosError} from 'axios';

const Background = styled.div`
  padding: 30px;
`

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
`

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
`

const RegisterBtn = styled.input`
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
`

const Block = styled.div`
  width: 100%;
  height: 100px;
`

function Register() {

  const [eye, setEye] = useState("hide")
  const [passwordState, setPasswordState] = useState("password");

  const setEyeState = () => {
    eye === "hide" ? setEye("show") : setEye("hide");
    passwordState === "password" ? setPasswordState("text") : setPasswordState("password");
  }

  const registerConfirm = () => {
    axios.post("https://14e5-2001-b011-4009-3895-5980-35d2-129-e0ad.jp.ngrok.io/api/v1/register/")
  }

  return (
    <Background>
      <Wrap>
        註冊帳戶
        <RegisterData>
          <label>電子郵件：<input type="text" name="email" /></label>
          <label>帳號：<input type="text" name="username" /></label>
          <label>密碼：<input type={passwordState} name="password" /></label>
          <label>再次輸入密碼：<input type={passwordState} /></label>
          <img src={process.env.PUBLIC_URL + `/icon/${eye}.png`} alt="..." onClick={() => setEyeState()} />
          <RegisterBtn type="submit" value="確認註冊" />
          <Block />
        </RegisterData>
      </Wrap>
    </Background>
  )
}

export default Register;