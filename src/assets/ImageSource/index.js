import styled from "styled-components";
import { imageSourceList } from "./imageSource";

const Background = styled.div`
  padding: 30px;
`;

const Wrap = styled.div`
  max-width: 680px;
  margin: auto;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  & a {
    text-decoration: none;
    color: black;
    margin-bottom: 15px;
    padding: 10px 0px;
    border-bottom: 1.5px solid white;

    &:hover {
      color: black;
      border-bottom: 1.5px solid black;
    }

    &:active {
      color: black;
      border-bottom: 1.5px solid black;
    }
  }
`;

function ImageSource() {
  return (
    <Background>
      <Wrap>
        {
          imageSourceList.map((data, index) => <a href={data.url} key={index}>{data.description}</a>)
        }
      </Wrap>
    </Background>
  );
}

export default ImageSource;
