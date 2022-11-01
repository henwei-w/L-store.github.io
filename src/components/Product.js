import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

const ProductTitle = styled.div`
  font-size: 1.2rem;
  margin: 50px 0px 30px 0px;
  text-align: center;
`;

const CustomRow = styled(Row)`
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 70vw;
  }

  @media screen and (min-width: 992px) {
    width: 60vw;
  }
`;

function Product(props) {
  const title = props.title;
  const productData = props.data;

  return (
    <Container>
      <ProductTitle>{title}</ProductTitle>

      <CustomRow xs={2} md={3} xl={4}>
        {productData.map((data) => (
          <Item
            key={data.id}
            path={[data.location, data.id]}
            imgSrc={data.img}
            data={[data.name, data.price]}
          />
        ))}
      </CustomRow>
    </Container>
  );
}

export default Product;
