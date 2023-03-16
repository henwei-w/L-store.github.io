import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";
import * as HTTP from "services/api";
import ScrollToTop from "helpers/ScrollToTop";
import { useForm } from "react-hook-form";

const Background = styled.div`
  padding: 30px;
`;

const Wrap = styled.div`
  max-width: 500px;
  margin: auto;
  margin-top: 30px;
  font-size: 20px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
`;

const RegisterData = styled.div`
  margin-top: 50px;
  position: relative;

  & form {
    width: 300px;
    display: flex;
    flex-direction: column;
    text-align: end;

    @media screen and (min-width: 768px) {
      margin: auto;
    }
  }

  & label {
    margin-top: 30px;
    font-size: 16px;
  }

  & img {
    width: 23px;
    height: 23px;
    position: absolute;
    top: 32px;
    cursor: pointer;
  }
`;

const RegisterBtn = styled.input`
  color: black;
  position: absolute;
  top: 350px;
  left: 20%;
  width: 200px;
  height: 50px;
  font-size: 20px;
  background-color: white;
  border: 2px solid black;
  border-radius: 6px;
  box-shadow: 0 0 3px 1px rgb(50, 50, 50);

  @media screen and (min-width: 768px) {
    left: 30%;
  }

  &:active {
    box-shadow: 0 0 3px 1px white;
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

const AlertMessageEmail = styled.div`
  font-size: 16px;
  color: red;
  position: absolute;
  top: 33px;
  left: 120px;
`;

const AlertMessageUsername = styled.div`
  font-size: 16px;
  color: red;
  position: absolute;
  top: 33px;
  left: 120px;
`;

const AlertMessagePassword = styled.div`
  font-size: 16px;
  color: red;
  position: absolute;
  top: 33px;
  left: 120px;
`;

const AlertMessagePasswordCheck = styled.div`
  font-size: 16px;
  color: red;
  position: absolute;
  top: 33px;
  left: 120px;
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setShowLoading(true);

    const error = () => {
      setWarning("註冊資料錯誤");
      setShowLoading(false);
      setShowWarning(true);
    };

    const value = {
      username: data.username,
      email: data.email,
      password: data.password,
      error: error,
    };

    HTTP.register(value);
  };

  return (
    <Background>
      <ScrollToTop />
      <Wrap>
        註冊帳戶
        <RegisterData>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label style={{ position: "relative" }}>
              電子郵件：
              <input id="email" {...register("email", { required: "*必填" })} />
              {!!errors.email && (
                <AlertMessageEmail>{errors.email.message}</AlertMessageEmail>
              )}
            </label>
            <label style={{ position: "relative" }}>
              帳號：
              <input
                id="username"
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
                id="password"
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
            <label style={{ position: "relative" }}>
              再次輸入密碼：
              <input
                type={passwordState}
                id="passwordCheck"
                {...register("passwordCheck", {
                  validate: (value) =>
                    value === watch("password") || "密碼不一致",
                })}
              />
              {!!errors.passwordCheck && (
                <AlertMessagePasswordCheck>
                  {errors.passwordCheck.message}
                </AlertMessagePasswordCheck>
              )}
            </label>
            <RegisterBtn type="submit" value="確認註冊" />
          </form>

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
