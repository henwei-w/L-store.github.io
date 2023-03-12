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

function Card(props) {
  const productData = props.data;

  return (
    <CustomCol>
      <Link to={`/Product_detail/${productData.gender}/${productData.id}`}>
        <ImgBackground>
          <img src={`https://henry-wu-1130.com:4000/uploads/${productData.img}`} alt="..." />

          <ItemText>
            <p>
              {productData.name}
              <br />
              <span>NT$ {productData.price}</span>
            </p>
          </ItemText>
        </ImgBackground>
      </Link>
    </CustomCol>
  );
}

export default Card;
