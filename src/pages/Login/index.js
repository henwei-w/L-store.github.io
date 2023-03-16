import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as HTTP from "services/api";
import ScrollToTop from "helpers/ScrollToTop";
import { useForm } from "react-hook-form";

const Background = styled.div`
  padding: 30px;
  outline: none;
`;

const Wrap = styled.div`
  max-width: 500px;
  margin: auto;
  margin-top: 50px;
  font-size: 20px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
`;

const LoginData = styled.div`
  margin-top: 50px;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  & form {
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  & label {
    margin-top: 30px;
    font-size: 16px;
  }

  & img {
    width: 23px;
    height: 23px;
    position: absolute;
    bottom: 1.6px;
    left: 200px;
    cursor: pointer;
  }
`;

const LoginBtn = styled.input`
  color: black;
  margin: auto;
  position: relative;
  top: 60px;
  width: 200px;
  height: 50px;
  font-size: 20px;
  background-color: rgb(235, 235, 235);
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px rgb(120, 120, 120);

  &:active {
    box-shadow: inset 0 0 3px 3px rgb(120, 120, 120);
  }
`;

const Hr = styled.hr`
  margin-top: 160px;
`;

const Register = styled.div`
  margin-top: 20px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;

  & a {
    width: 200px;
    height: 50px;
    font-size: 20px;
    margin: auto;
    background-color: rgb(235, 235, 235);
    border: 2px solid black;
    color: black;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    border-radius: 5px;
    box-shadow: 0 0 1px 1px rgb(120, 120, 120);

    &:active {
      box-shadow: inset 0 0 3px 3px rgb(120, 120, 120);
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

const AlertMessageUsername = styled.div`
  font-size: 16px;
  color: red;
  padding-left: 3.3rem;
  position: absolute;
  top: 33px;
`;

const AlertMessagePassword = styled.div`
  font-size: 16px;
  color: red;
  padding-left: 3.3rem;
  position: absolute;
  top: 33px;
`;

function Login() {
  const [eye, setEye] = useState("hide");
  const [passwordState, setPasswordState] = useState("password");

  const setEyeState = () => {
    eye === "hide" ? setEye("show") : setEye("hide");
    passwordState === "password"
      ? setPasswordState("text")
      : setPasswordState("password");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setShowLoading(true);

    const error = () => {
      setShowLoading(false);
      setShowWarning(true);
    };

    const value = { ...data, error: error };

    HTTP.login(value);
  };

  const [showLoading, setShowLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const handleLoadingClose = () => setShowLoading(false);
  const handleWarningClose = () => setShowWarning(false);

  return (
    <Background tabIndex={0}>
      <ScrollToTop />
      <Wrap>
        登入
        <LoginData>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label style={{ position: "relative" }}>
              帳號：
              <input
                id="loginUsername"
                {...register("username", { required: "*必填" })}
              />
              {!!errors.username && (
                <AlertMessageUsername>
                  {errors.username.message}
                </AlertMessageUsername>
              )}
            </label>

            <label style={{ position: "relative" }}>
              密碼：
              <input
                type={passwordState}
                id="loginPassword"
                {...register("password", { required: "*必填" })}
              />
              <img
                src={process.env.PUBLIC_URL + `/icon/${eye}.png`}
                alt="..."
                onClick={() => setEyeState()}
              />
              {!!errors.password && (
                <AlertMessagePassword>
                  {errors.password.message}
                </AlertMessagePassword>
              )}
            </label>

            <LoginBtn type="submit" value="登入" />
          </form>
        </LoginData>
        <Hr />
        <Register>
          還沒加入會員?
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
        <CustomModalBody>帳號或密碼錯誤</CustomModalBody>
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
