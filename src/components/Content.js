import React, { useContext } from "react";
import Product from "./Product";
import { content } from "../App.js";
import styled from "styled-components";

const Container = styled.div`
  padding: 25px;
`;

const Title = styled.div`
  font-size: 1.2rem;
  margin: 20px 0px;
  text-align: center;
`;

const Background = styled.div`
  width: calc(100vw - 50px);
  margin: auto;

  & img {
    width: 100%;
    max-width: 600px;
  }
`;

const Item = styled.div`
  display: flex;
  position: relative;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 30px;
`;

const Text = styled.div`
  position: absolute;
  right: 25px;
  top: 25px;
  font-size: 1.1rem;
  font-weight: bolder;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  padding: 18px;
  background-color: rgb(236, 129, 68);
`;

function Content() {
  const data = useContext(content);

  return (
    <Container>
      <Title>開幕滿額禮</Title>
      <Background>
        <Item>
          <img
            src={process.env.PUBLIC_URL + "/image/event-img.jpg"}
            alt="..."
          />
          <Text>
            <p>
              全館滿2000元
              <br />
              即送造型帆布托特包
            </p>
          </Text>
        </Item>
      </Background>

      <Product
        title={"新品上市"}
        data={[
          data[0],
          data[1],
          data[2],
          data[10],
          data[13],
          data[14],
          data[15],
          data[16],
        ]}
      />

      <Product
        title={"熱銷商品"}
        data={[
          data[4],
          data[5],
          data[6],
          data[7],
          data[12],
          data[17],
          data[18],
          data[19],
        ]}
      />
    </Container>
  );
}

export default Content;
