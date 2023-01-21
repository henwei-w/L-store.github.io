import React from "react";
import styled from "styled-components";
import { saleData } from "./saleData";

const Container = styled.div`
  padding: 25px;
`;

const Title = styled.div`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 40px;
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

function Sale() {

  return (
    <Container>
      <Title>{saleData.title}</Title>
      <Background>
        <Item>
          <img
            src={process.env.PUBLIC_URL + `${saleData.image}`}
            alt="..."
          />
          <Text>
            <p>
              {saleData.description[0]}
              <br />
              {saleData.description[1]}
            </p>
          </Text>
        </Item>
      </Background>
    </Container>
  );
}

export default Sale;
