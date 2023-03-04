import styled from "styled-components";
import { useEffect, useState } from "react";
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
  padding-left: 18%;

  & span {
    display: flex;
    margin-top: 12px;
    margin-bottom: 2px;
  }

  & p {
    margin-right: 0.6rem;
    margin-top: 0.2rem;
  }

  & input {
    width: 38%;
  }
`;

const CustomButton = styled(Button)`
  width: 8rem;
  margin-top: 20px;
`;

const ButtonPlus = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.8rem;
  position: absolute;
  right: 11%;
`;

const AlertMessage = styled.div`
  color: red;
  padding-left: 3.3rem;
`;

function ProductTable(props) {
  const dataSource = props.data;

  const columns = [
    "ID",
    "名稱",
    "價格",
    "尺寸",
    "顏色",
    "性別",
    "類別",
    "描述",
    "圖片",
    "編輯",
    "刪除",
  ];

  const [editIndex, setEditIndex] = useState(1);

  const [show, setShow] = useState(false);

  const [buttonState, setButtonState] = useState("add");

  const [imgState, setImgState] = useState();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const pushFormData = () => {
      const formData = new FormData();

      const appendSize = (str) => str.split(",");

      const appendColor = () => {
        let colorsArr = [];
        for (let i = 0; i < colorQuantity; i++) {
          const obj = {
            rgb: data[`rgb${i + 1}`],
            name: data[`colorName${i + 1}`],
          };
          colorsArr.push(obj);
        }
        return JSON.stringify(colorsArr);
      };

      buttonState === "add"
        ? console.log("addProduct mode")
        : formData.append("id", dataSource[editIndex].id);
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append(
        "size",
        buttonState === "add"
          ? JSON.stringify(appendSize(data.size))
          : JSON.stringify(data.size)
      );
      formData.append("colors", appendColor());
      formData.append("gender", data.gender);
      formData.append("type", data.type);
      formData.append("description", data.description);
      formData.append("img", imgState);

      buttonState === "add"
        ? HTTP.addProduct(formData)
        : HTTP.editProduct(formData);
    };

    pushFormData();

    setShow(false);
  };

  useEffect(() => {
    const adjustment = (data) => {
      for (let i = 0; i < data.length; i++) {
        setValue(`rgb${i + 1}`, data[i].rgb);
        setValue(`colorName${i + 1}`, data[i].name);
      }
    };

    if (buttonState === "edit") {
      setValue("name", dataSource[editIndex].name);
      setValue("price", dataSource[editIndex].price);
      setValue("size", JSON.parse(dataSource[editIndex].size));
      adjustment(JSON.parse(dataSource[editIndex].colors));
      setValue("gender", dataSource[editIndex].gender);
      setValue("type", dataSource[editIndex].type);
      setValue("description", dataSource[editIndex].description);
    } else {
      setValue("name", "");
      setValue("price", "");
      setValue("size", []);
      setValue("rgb1", "");
      setValue("colorName1", "");
      setValue("gender", "");
      setValue("type", "");
      setValue("description", "");
    }
  }, [editIndex, dataSource, buttonState, setValue]);

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

  const deleteData = (id) => {
    HTTP.deleteProduct(id);
    alert("刪除成功！");
  };

  const fixSizeView = (value) => {
    return <>{JSON.parse(value).map((data) => data + " ")}</>;
  };

  const fixColorView = (value) => {
    let color = [];
    for (let i = 0; i < value.length; i++) {
      color.push([value[i].rgb, value[i].name]);
    }
    return <>{color.map((data) => data[0] + data[1] + " ")}</>;
  };

  const colorInputRender = (data) => {
    let render = [];
    for (let i = 0; i < data; i++) {
      render.push(
        <span key={i} style={{ margin: "0px" }}>
          <input
            key={`rgb${i}`}
            {...register(`rgb${i + 1}`, { required: "*必填" })}
          />
          <input
            key={`colorName${i}`}
            {...register(`colorName${i + 1}`, { required: "*必填" })}
          />
          <ButtonPlus
            variant="outline-secondary"
            size="sm"
            onClick={() => setColorQuantity(colorQuantity - 1)}
          >
            -
          </ButtonPlus>
        </span>
      );
    }
    return render;
  };

  useEffect(() => {
    setColorQuantity(
      buttonState === "edit"
        ? JSON.parse(dataSource[editIndex].colors).length
        : 1
    );
  }, [editIndex, buttonState, dataSource]);

  const [colorQuantity, setColorQuantity] = useState(
    buttonState === "edit" ? JSON.parse(dataSource[editIndex].colors).length : 1
  );

  const colorAlert = () => {
    if (!!errors.rgb1 || !!errors.colorName1) {
      return <AlertMessage>*必填</AlertMessage>;
    }
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
              <p>名稱 : </p>
              <input {...register("name", { required: "*必填" })} />
            </span>
            {!!errors.name && (
              <AlertMessage>{errors.name.message}</AlertMessage>
            )}
            <span>
              <p>價格 : </p>
              <input {...register("price", { required: "*必填" })} />
            </span>
            {!!errors.price && (
              <AlertMessage>{errors.price.message}</AlertMessage>
            )}
            <span>
              <p>尺寸 : </p>
              <input {...register("size", { required: "*必填" })} />
            </span>
            {!!errors.size && (
              <AlertMessage>{errors.size.message}</AlertMessage>
            )}
            <span>
              <p>顏色 : </p>
              <div>{colorInputRender(colorQuantity).map((data) => data)}</div>
              <ButtonPlus
                variant="outline-secondary"
                size="sm"
                onClick={() => setColorQuantity(colorQuantity + 1)}
              >
                +
              </ButtonPlus>
            </span>
            {colorAlert()}
            <span>
              <p>性別 : </p>
              <input {...register("gender", { required: "*必填" })} />
            </span>
            {!!errors.gender && (
              <AlertMessage>{errors.gender.message}</AlertMessage>
            )}
            <span>
              <p>類別 : </p>
              <input {...register("type", { required: "*必填" })} />
            </span>
            {!!errors.type && (
              <AlertMessage>{errors.type.message}</AlertMessage>
            )}
            <span>
              <p>描述 : </p>
              <input {...register("description", { required: "*必填" })} />
            </span>
            {!!errors.description && (
              <AlertMessage>{errors.description.message}</AlertMessage>
            )}
            <span>
              <p>圖片 : </p>
              <input
                type="file"
                {...register("img", { required: "*必填" })}
                onChange={(e) => setImgState(e.target.files[0])}
              />
            </span>
            {!!errors.img && <AlertMessage>{errors.img.message}</AlertMessage>}

            <Modal.Footer>
              <Button
                variant="outline-secondary"
                onClick={() => setShow(false)}
              >
                取消
              </Button>
              <Button variant="secondary" type="submit">
                {buttonState === "add" ? "新增" : "編輯"}
              </Button>
            </Modal.Footer>
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
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.price}</td>
              <td>{fixSizeView(value.size)}</td>
              <td>{fixColorView(JSON.parse(value.colors))}</td>
              <td>{value.gender}</td>
              <td>{value.type}</td>
              <td>{value.description}</td>
              <td>{value.img}</td>
              <td>
                <Button variant="secondary" onClick={() => startEdit(index)}>
                  編輯
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-danger"
                  onClick={() => deleteData(value.id)}
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
