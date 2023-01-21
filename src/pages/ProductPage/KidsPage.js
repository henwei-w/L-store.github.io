
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductMenu from "../../components/TypeMenu";
import Product from "../../components/CardGroups";
import { content } from "../../App.js"




function KidsPage() {

  const data = useContext(content)

  const params = useParams()

  const getType = (type) => {
    const typeArr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].location.gender === "kids") {
        if (data[i].location.type === type) {
          typeArr.push(data[i]);
        }
      }
    }
    return typeArr;
  };

  let menuData;

  switch(params.type){
    case params.type = "上衣":
      menuData = getType("上衣");
      break;

    case params.type = "下身":
      menuData = getType("下身");
      break;

    case params.type = "外套":
      menuData = getType("外套");
      break;

    case params.type = "洋裝":
      menuData = getType("洋裝");
      break;

    default:
      break;
  }


  return (
    <>
      <ProductMenu path={"kids"} menu={["上衣","下身","外套","洋裝"]} />

      <Product title={""} data={menuData} />
    </>
  )
}

export default KidsPage;