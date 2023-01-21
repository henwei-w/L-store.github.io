import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import ProductTable from "./ProductTable";

const Wrap = styled.div`
  margin-top: 30px;
  padding: 30px;
  font-size: 1.2rem;
  display: flex;
  overflow: scroll;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
`;

const ListChange = styled.div`
  width: 15vw;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const CustomButton = styled(Button)`
  width: 100%;
  margin-bottom: 12px;
`;

function Backstage() {
  const params = useParams();
  const type = params.type;

  return (
    <Wrap>
      <ListChange>
        <Link to="/backstage/product">
          <CustomButton variant="outline-secondary">商品</CustomButton>
        </Link>
        <Link to="/backstage/member">
          <CustomButton variant="outline-secondary">人員管理</CustomButton>
        </Link>
      </ListChange>

      {type === "product" ? <ProductTable /> : false}
    </Wrap>
  );
}

export default Backstage;
