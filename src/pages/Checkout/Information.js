import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

const Background = styled.div`
  padding: 30px;
`;

const Info = styled.div`
  max-width: 600px;
  margin: auto;
  font-size: 1.5rem;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  @media screen and (min-width: 992px) {
    position: relative;
    left: -35px;
  }
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 235px;
  margin: auto;

  @media screen and (min-width: 576px) {
    width: 270px;
  }
`;

const Basic = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  margin-top: 50px;

  & label {
    margin-bottom: 30px;
    font-size: 1.1rem;
  }
`;

const Transport = styled.div`
  margin-top: 35px;
  font-size: 1.2rem;
  text-align: end;
`;

const ToHome = styled.input`
  margin-left: 18px;
  margin-right: 5.5px;

  &:checked ~ .address {
    display: block;
  }
`;

const ConvenienceStore = styled.input`
  margin-left: 18px;
  margin-right: 5.5px;

  &:checked ~ .store {
    display: block;
  }
`;

const Address = styled.div.attrs({ className: "address" })`
  display: none;
  text-align: end;
  font-size: 1.1rem;
  margin-top: 15px;
`;

const Store = styled.div.attrs({ className: "store" })`
  display: none;
  text-align: end;
  margin-top: 15px;
`;

const Submit = styled.input`
  width: 200px;
  height: 50px;
  margin: auto;
  position: relative;
  top: 100px;
  font-size: 1.6rem;
  text-decoration: none;
  color: black;
  background-color: rgb(235, 235, 235);
  padding: 10px 20px;
  border: 2.5px solid black;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px rgb(120, 120, 120);

  &:active {
    box-shadow: inset 0 0 3px 3px rgb(120, 120, 120);
  }
`;

const Block = styled.div`
  width: 100%;
  height: 100px;
`;

const AlertMessageName = styled.div`
  font-size: 16px;
  color: red;
  position: absolute;
  top: 33px;
  left: 80px;

  @media screen and (min-width: 576px) {
    left: 92px;
  }
`;

const AlertMessagePhoneNumber = styled.div`
  font-size: 16px;
  color: red;
  position: absolute;
  top: 33px;
  left: 80px;

  @media screen and (min-width: 576px) {
    left: 92px;
  }
`;

const AlertMessageEmail = styled.div`
  font-size: 16px;
  color: red;
  position: absolute;
  top: 33px;
  left: 80px;

  @media screen and (min-width: 576px) {
    left: 92px;
  }
`;

const AlertMessageAddress = styled.div`
  font-size: 16px;
  color: red;
  position: absolute;
  top: 33px;
  left: 40px;

  @media screen and (min-width: 576px) {
    left: 46px;
  }
`;

function Information() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Background>
      <Info>
        配送資料
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Basic>
            <label style={{ position: "relative" }}>
              姓名：
              <input {...register("name", { required: "*必填" })} />
              {!!errors.name && (
                <AlertMessageName>{errors.name.message}</AlertMessageName>
              )}
            </label>
            <label style={{ position: "relative" }}>
              電話：
              <input {...register("phoneNumber", { required: "*必填" })} />
              {!!errors.phoneNumber && (
                <AlertMessagePhoneNumber>{errors.phoneNumber.message}</AlertMessagePhoneNumber>
              )}
            </label>
            <label style={{ position: "relative" }}>
              電子郵件：
              <input {...register("email", { required: "*必填" })} />
              {!!errors.email && (
                <AlertMessageEmail>{errors.email.message}</AlertMessageEmail>
              )}
            </label>
          </Basic>

          <Transport>
            配送方式：
            <ToHome
              id="toHome"
              type="radio"
              name="transport"
              value="宅配"
              defaultChecked
            />
            <label htmlFor="toHome">宅配</label>
            <ConvenienceStore
              id="convenient"
              type="radio"
              name="transport"
              value="超商取貨"
            />
            <label htmlFor="convenient">超商取貨</label>
            <Address>
              <label style={{ position: "relative" }}>
                地址：
                <input {...register("address", { required: "*必填" })} />
                {!!errors.address && (
                <AlertMessageAddress>{errors.address.message}</AlertMessageAddress>
              )}
              </label>
            </Address>
            <Store>
              <Button variant="outline-secondary">選擇門市</Button>
            </Store>
          </Transport>

          <Submit type="submit" value="選擇付款方式" />

          <Block />
        </Form>
      </Info>
    </Background>
  );
}

export default Information;
