import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const CustomCol = styled(Col)`
  margin: 30px 0px 80px 0px;
  padding: 0px;

  & img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  & a {
    text-decoration: none;
  }
`;

const ImgBackground = styled.div`
  width: 0;
  max-width: 146px;
  min-width: 132px;
  height: 0;
  max-height: 220px;
  min-height: 198px;
  margin: auto;
`;

const ItemText = styled.div`
  margin-top: 5px;

  & p {
    font-size: 0.8rem;
    line-height: 1.6rem;
    margin-left: 2px;
    color: black;
  }
`;

function Item(props) {
  const imgSrc = props.imgSrc;
  const productData = props.data;
  const path = props.path;

  return (
    <CustomCol>
      <Link to={`/Product_detail/${path[0]}/${path[1]}`}>
        <ImgBackground>
          <img src={process.env.PUBLIC_URL + imgSrc} alt="..." />

          <ItemText>
            <p>
              {productData[0]}
              <br />
              <span>NT$ {productData[1]}</span>
            </p>
          </ItemText>
        </ImgBackground>
      </Link>
    </CustomCol>
  );
}

export default Item;
