import * as HTTP from "services/api";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Detail from "./Detail";
import ScrollToTop from "helpers/ScrollToTop";

const CustomModal = styled(Modal)`
  position: absolute;
  top: 23%;
`;

const CustomModalBody = styled(Modal.Body)`
  padding: 150px 50px;
  text-align: center;
  font-size: 1.8rem;
`;

function ProductDetail() {
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
      <ScrollToTop />
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
        <Detail data={productData} />
      ) : (
        <span style={{ display: "none" }} />
      )}
    </>
  );
}

export default ProductDetail;
