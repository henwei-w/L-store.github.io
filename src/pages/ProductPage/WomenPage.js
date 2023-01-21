import ProductMenu from "../../components/TypeMenu";
import Product from "../../components/CardGroups";
import { useContext } from "react";
import { content } from "../../App.js";
import { useParams } from "react-router-dom";

function WomenPage() {

  const data = useContext(content);  //get api
  const params = useParams();

  const getType = (type) => {
    const typeArr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].location.gender === "women") {
        if (data[i].location.type === type) {
          typeArr.push(data[i]);
        }
      }
    }
    return typeArr;
  };

  let menuData;

  switch (params.type) {
    case (params.type = "上衣"):
      menuData = getType("上衣");
      break;

    case (params.type = "下身"):
      menuData = getType("下身");
      break;

    case (params.type = "洋裝"):
      menuData = getType("洋裝");
      break;

    case (params.type = "外套"):
      menuData = getType("外套");
      break;

    case (params.type = "配件"):
      menuData = getType("配件");
      break;

    default:
      break;
  }

  return (
    <>
      <ProductMenu
        path={"women"}
        menu={["上衣", "下身", "洋裝", "外套", "配件"]}
      />

      <Product title={""} data={menuData} />
    </>
  );
}

export default WomenPage;
