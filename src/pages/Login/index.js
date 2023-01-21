import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
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

const LoginData = styled.div`
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
    top: calc(2.2rem + 15px);
    right: 8px;
    cursor: pointer;
  }

  & a {
    width: auto;
    padding: 3px 0px;
    font-size: 0.9rem;
    color: black;
    text-decoration: none;
    position: absolute;
    right: 0px;
    top: 80px;

    &:hover {
      border-bottom: 1.5px solid black;
    }
  }
`;

const LoginBtn = styled.button`
  position: absolute;
  top: 150px;
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

const Hr = styled.hr`
  margin-top: 160px;
`;

const Register = styled.div`
  margin-top: 20px;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  text-align: end;
  margin-right: 40%;
  position: relative;

  & a {
    width: 15rem;
    height: 3rem;
    font-size: 1.35rem;
    background-color: white;
    border: 2px solid black;
    color: black;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    position: absolute;
    right: -25%;

    &:active {
      color: white;
      background-color: rgb(76, 84, 89);
      border: 1.5px solid rgb(76, 84, 89);
    }
  }
`;

const Block = styled.div`
  width: 100%;
  height: 100px;
`;

const CustomModalBody = styled(Modal.Body)`
  padding: 50px;
  text-align: center;
  font-size: 1.8rem;
`;

function Login() {
  const [eye, setEye] = useState("hide");
  const [passwordState, setPasswordState] = useState("password");

  const [warning, setWarning] = useState("");

  const setEyeState = () => {
    eye === "hide" ? setEye("show") : setEye("hide");
    passwordState === "password"
      ? setPasswordState("text")
      : setPasswordState("password");
  };

  const getAccoountData = () => {
    setShowLoading(true);

    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let checkArr = [username, password];
    let formState = 0;

    for (let i = 0; i < checkArr.length; i++) {
      if (checkArr[i] === "") {
        setWarning("請輸入帳號及密碼");
        setShowLoading(false);
        setShowWarning(true);
        break;
      }
      formState += 1;
    }

    let error = () => {
      setWarning("帳號或密碼錯誤");
      setShowLoading(false);
      setShowWarning(true);
    };

    let value;
    formState === 2
      ? (value = { username: username, password: password, error: error })
      : console.log("error");

    formState === 2 ? HTTP.login(value) : console.log("error");
  };

  const [showLoading, setShowLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const handleLoadingClose = () => setShowLoading(false);
  const handleWarningClose = () => setShowWarning(false);

  return (
    <Background>
      <Wrap>
        登入
        <LoginData>
          <label>
            帳號：
            <input type="text" name="username" id="loginUsername" />
          </label>
          <label>
            密碼：
            <input type={passwordState} name="password" id="loginPassword" />
          </label>
          <img
            src={process.env.PUBLIC_URL + `/icon/${eye}.png`}
            alt="..."
            onClick={() => setEyeState()}
          />
          <Link to="">忘記密碼/修改密碼</Link>
          <LoginBtn type="submit" onClick={() => getAccoountData()}>
            登入
          </LoginBtn>
        </LoginData>
        <Hr />
        <Register>
          還沒加入會員
          <Link to="/register">註冊</Link>
          <Block />
        </Register>
      </Wrap>

      <Modal
        show={showLoading}
        onHide={handleLoadingClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <CustomModalBody>
          Loading
          <Spinner
            animation="grow"
            variant="secondary"
            size="sm"
            style={{ marginLeft: "10px", marginRight: "6px" }}
          />
          <Spinner
            animation="grow"
            variant="secondary"
            size="sm"
            style={{ marginRight: "6px" }}
          />
          <Spinner
            animation="grow"
            variant="secondary"
            size="sm"
            style={{ marginRight: "6px" }}
          />
        </CustomModalBody>
        <Modal.Footer>
          <Button
            variant="outline-secondary"
            onClick={() => setShowLoading(false)}
          >
            取消
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showWarning} onHide={handleWarningClose} centered>
        <CustomModalBody>{warning}</CustomModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowWarning(false)}>
            確定
          </Button>
        </Modal.Footer>
      </Modal>
    </Background>
  );
}

export default Login;
