import styled from "styled-components";

const CustomFooter = styled.div`
  background-color: rgb(220, 220, 220);
  width: 100%;
  height: 10rem;
  padding: 35px;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  bottom: 0;
`;

const Text = styled.div`
  font-size: 1rem;

  & p {
    margin-top: 15px;
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;
const CopyRight = styled.div`
  font-size: 0.8rem;
`;

function Footer() {
  return (
    <CustomFooter>
      <Text>
        聯絡資訊
        <p>
          電話： 0912345678
          <br />
          e-mail: lstore@gmail.com
        </p>
      </Text>
      <CopyRight>copyright &copy; Linus Wu 2022.</CopyRight>
    </CustomFooter>
  );
}

export default Footer;
