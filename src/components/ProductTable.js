import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { content } from "App";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import * as HTTP from "services/api";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const CustomTable = styled(Table)`
  margin-top: 30px;
  z-index: 20;

  & td {
    padding: 10px;
    position: relative;

    & label {
      border: 1.5px solid black;
      padding: 5px;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: end;
  margin-right: 30%;

  & span {
    margin-bottom: 6px;
  }

  & p {
    margin-right: 85%;
    font-size: 1.1rem;
  }
`;

const ImgSpan = styled.span`
  margin-right: -39.5%;
`;

const CustomButton = styled(Button)`
  width: 8rem;
  margin-top: 20px;
`;

const CustomModalFooter = styled(Modal.Footer)`
  margin-right: -43%;
`;

function ProductTable() {
  const data = useContext(content);

  // getProductList api
  const [dataSource, setDataSource] = useState(data);

  const columns = [
    "ID",
    "名稱",
    "價格",
    "尺寸",
    "顏色",
    "類別",
    "描述",
    "圖片",
    "編輯",
    "刪除",
  ];

  const [editIndex, setEditIndex] = useState(1);

  const [show, setShow] = useState(false);

  const [buttonState, setButtonState] = useState("");

  var formData = new FormData();

  const [formState, setFormState] = useState([]);

  const { register, handleSubmit, watch, setValue } = useForm();
  const onSubmit = (data) => console.log(data);

  const setImg = (e) => {
    let newState = [...formState];
    const img = {
      key: "img",
      value: e.target.files[0],
    };
    newState.push(img);
    setFormState(newState);
  };

  const startEdit = (index) => {
    setButtonState("edit");
    setEditIndex(index);
    setShow(true);
  };

  const startAdd = () => {
    setButtonState("add");
    setEditIndex(dataSource.length);
    setShow(true);
  };

  useEffect(() => {
    if (buttonState === "edit") {
      setValue("name", dataSource[editIndex].name);
      setValue("price", dataSource[editIndex].price);
      setValue("size", dataSource[editIndex].size);
      setValue("color", JSON.stringify(dataSource[editIndex].color));
      setValue("location", dataSource[editIndex].location);
      setValue("description", dataSource[editIndex].description);
    } else {
      setValue("name", "");
      setValue("price", "");
      setValue("size", []);
      setValue("color", []);
      setValue("location", "");
      setValue("description", "");
    }
  }, [editIndex, dataSource, buttonState, setValue]);

  const storeData = () => {
    const formValue = watch();
    const valueArr = Object.values(formValue);
    let valueState = 0;
    for (let i = 0; i < valueArr.length; i++) {
      if (valueArr[i] === "") {
        alert("商品資料未填寫完整");
        break;
      }
      valueState++;
    }

    const pushFormData = () => {
      for (let i = 0; i < formState.length; i++) {
        formData.append(formState[i].key, formState[i].value);
      }

      buttonState === "add"
        ? HTTP.addProduct(formData)
        : HTTP.editProduct(formData);
    };

    const setNewValue = () => {
      if (formState[0].hasOwnProperty("img")) {
        let newState = [...formState];
        newState.push({ key: "name", value: formValue.name });
        newState.push({ key: "price", value: formValue.price });
        newState.push({ key: "size", value: formValue.size });
        newState.push({ key: "color", value: JSON.parse(formValue.color) });
        newState.push({ key: "location", value: formValue.location });
        newState.push({ key: "description", value: formValue.description });
        setFormState(newState);

        pushFormData();
      } else {
        alert("選擇要上傳的圖片");
      }
    };

    valueState === 7 ? setNewValue() : console.log("error");

    setShow(false);
  };

  const deleteData = (index) => {
    let newState = [...dataSource];
    newState.splice(index, 1);
    setDataSource(newState);

    // deleteProduct api
  };

  return (
    <Wrap>
      商品列表
      <CustomButton variant="secondary" onClick={() => startAdd()}>
        新增商品
      </CustomButton>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>產品資料</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <span>
              <p>ID : {editIndex + 1}</p>
            </span>
            <span>
              名稱 : <input {...register("name", { required: true })} />
            </span>
            <span>
              價格 : <input {...register("price", { required: true })} />
            </span>
            <span>
              尺寸 : <input {...register("size", { required: true })} />
            </span>
            <span>
              顏色 : <input {...register("color", { required: true })} />
            </span>
            <span>
              類別 : <input {...register("location", { required: true })} />
            </span>
            <span>
              描述 : <input {...register("description", { required: true })} />
            </span>
            <ImgSpan>
              圖片 :{" "}
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                {...register("img", { required: true })}
                onChange={(e) => setImg(e)}
              />
            </ImgSpan>

            <CustomModalFooter>
              <Button
                variant="outline-secondary"
                onClick={() => setShow(false)}
              >
                取消
              </Button>
              <Button
                variant="secondary"
                type="submit"
                onClick={() => storeData()}
              >
                {buttonState === "add" ? "新增" : "編輯"}
              </Button>
            </CustomModalFooter>
          </Form>
        </Modal.Body>
      </Modal>
      <CustomTable striped bordered hover backdrop="true">
        <thead>
          <tr>
            {columns.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.name}</td>
              <td>{value.price}</td>
              <td>{value.size}</td>
              <td>{JSON.stringify(value.color)}</td>
              <td>{value.location}</td>
              <td>{value.description}</td>
              <td></td>
              <td>
                <Button variant="secondary" onClick={() => startEdit(index)}>
                  編輯
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-danger"
                  onClick={() => deleteData(index)}
                >
                  刪除
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </CustomTable>
    </Wrap>
  );
}

export default ProductTable;
