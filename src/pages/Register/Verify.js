import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useState, useEffect } from "react";
import * as HTTP from "services/api";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Register from ".";
import ScrollToTop from "helpers/ScrollToTop";

const Wrap = styled.div`
  padding: 30px;
`;

const Form = styled.form`
  width: 303px;
  margin: auto;
  margin-top: 100px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlertMessage = styled.div`
  font-size: 20px;
  color: red;
  padding-left: 5.5rem;
  position: absolute;
  top: 40px;
`;

const CheckBtn = styled.input`
  color: black;
  width: 100px;
  height: 50px;
  margin-top: 100px;
  font-size: 18px;
  background-color: rgb(235, 235, 235);
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0 0 0.6px 0.6px rgb(120, 120, 120);

  &:active {
    box-shadow: inset 0 0 3px 3px rgb(120, 120, 120);
  }
`;

const CustomModalBody = styled(Modal.Body)`
  padding: 50px;
  font-size: 1.3rem;
  text-align: center;
`;

function Verify() {
  const [productData, setProductData] = useState([]);
  const [verifyState, setVerifyState] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    HTTP.getProductList()
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    parseInt(data.verification) === productData[0].price
      ? setVerifyState(true)
      : handleShow();
  };

  return (
    <>
      {verifyState ? (
        <Register />
      ) : (
        <Wrap>
          <ScrollToTop />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <label style={{ position: "relative" }}>
              驗證碼：
              <input
                type="password"
                {...register("verification", { required: "*必填" })}
              />
              {!!errors.verification && (
                <AlertMessage>{errors.verification.message}</AlertMessage>
              )}
            </label>
            <CheckBtn type="submit" value="確認" />
          </Form>

          <Modal show={show} onHide={handleClose} centered>
            <CustomModalBody>錯誤的驗證碼</CustomModalBody>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                確定
              </Button>
            </Modal.Footer>
          </Modal>
        </Wrap>
      )}
    </>
  );
}

export default Verify;
