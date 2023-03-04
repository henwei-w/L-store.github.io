import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductTable from "./ProductTable";
import * as HTTP from "services/api";
import NotFound from "pages/NotFound";

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

const CustomModal = styled(Modal)`
  padding-top: 23%;
`;

const CustomModalBody = styled(Modal.Body)`
  padding: 150px 50px;
  text-align: center;
  font-size: 1.8rem;
`;

function Backstage() {
  const loginState = sessionStorage.getItem("token");

  const params = useParams();
  const type = params.type;

  const [show, setShow] = useState(true);

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    HTTP.getProductList()
      .then((response) => {
        setProductData(response.data);
        setShow(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {loginState ? (
        <>
          <CustomModal show={show}>
            <CustomModalBody>
              Loading
              <Spinner
                animation="grow"
                variant="secondary"
                size="sm"
                style={{ marginLeft: "10px", marginRight: "6px" }}
              />
              <Spinner
                animation="grow"
                variant="secondary"
                size="sm"
                style={{ marginRight: "6px" }}
              />
              <Spinner
                animation="grow"
                variant="secondary"
                size="sm"
                style={{ marginRight: "6px" }}
              />
            </CustomModalBody>
          </CustomModal>
          {show === false ? (
            <Wrap>
              <ListChange>
                <Link to="/backstage/product">
                  <CustomButton variant="outline-secondary">商品</CustomButton>
                </Link>
                <Link to="/backstage/member">
                  <CustomButton variant="outline-secondary">
                    人員管理
                  </CustomButton>
                </Link>
              </ListChange>

              {type === "product" ? <ProductTable data={productData} /> : false}
            </Wrap>
          ) : (
            <span style={{ display: "none" }} />
          )}
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default Backstage;
