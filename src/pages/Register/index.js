import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
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

const CustomModalBody = styled(Modal.Body)`
  padding: 50px;
  text-align: center;
  font-size: 1.8rem;
`;

function Register() {
  const [eye, setEye] = useState("hide");
  const [passwordState, setPasswordState] = useState("password");

  const [warning, setWarning] = useState("");

  const [showLoading, setShowLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const handleLoadingClose = () => setShowLoading(false);
  const handleWarningClose = () => setShowWarning(false);

  const setEyeState = () => {
    eye === "hide" ? setEye("show") : setEye("hide");
    passwordState === "password"
      ? setPasswordState("text")
      : setPasswordState("password");
  };

  const getFormValue = () => {
    setShowLoading(true);

    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let passwordCheck = document.getElementById("passwordCheck").value;

    let checkArr = [email, username, password, passwordCheck];
    let formState = 0;

    for (let i = 0; i < checkArr.length; i++) {
      if (checkArr[i] === "") {
        setWarning("尚有未填寫的資料");
        setShowLoading(false);
        setShowWarning(true);
        break;
      }
      formState += 1;
    }

    let doubleCheck = () =>
      password === passwordCheck
        ? true
        : (() => {
            formState = 0;
            setWarning("確認的密碼不一致");
            setShowLoading(false);
            setShowWarning(true);
          })();

    formState === 4 ? doubleCheck() : (formState = 0);

    let error = () => {
      setWarning("註冊資料錯誤");
      setShowLoading(false);
      setShowWarning(true);
    };

    let value;
    formState === 4
      ? (value = {
          username: username,
          email: email,
          password: password,
          error: error,
        })
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

export default Register;
