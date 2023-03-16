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
  position: relative;
`;

const ItemText = styled.div`
  margin-top: 5px;

  & p {
    font-size: 1.2rem;
    line-height: 2rem;
    margin-left: 2px;
    color: black;
  }
`;

const NewProductLabel = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: -8px;
  left: -8px;
`

function Card(props) {
  const productData = props.data;
  const label = props.label;

  return (
    <CustomCol>
      <Link to={`/Product_detail/${productData.gender}/${productData.id}`}>
        <ImgBackground>
          {label === "new" ? <NewProductLabel src={process.env.PUBLIC_URL + "/icon/new-label.png"} alt="..." /> : false}
          <img src={`${process.env.REACT_APP_API_URL}/uploads/${productData.img}`} alt="..." />

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
