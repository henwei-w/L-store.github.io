import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

const Title = styled.div`
  font-size: 1.8rem;
  margin: 60px 0px 30px 0px;
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

function CardGroups(props) {
  const title = props.title;
  const product = props.data;
  const label = props.label

  return (
    <Container>
      <Title>{title}</Title>

      <CustomRow xs={2} md={3} xl={4}>
        {product.map((value, index) => (
          <Card key={index} data={value} label={label} />
        ))}
      </CustomRow>
    </Container>
  );
}

export default CardGroups;
