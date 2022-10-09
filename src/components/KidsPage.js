
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductMenu from "./ProductMenu";
import Product from "./Product";
import { content } from "../App.js"




function KidsPage() {

  const data = useContext(content)

  const params = useParams()

  let menuData;

  switch(params.type){
    case params.type = "上衣":
      menuData = [data[24],data[25]]
      break;

    case params.type = "下身":
      menuData = [data[26]]
      break;

    case params.type = "外套":
      menuData = [data[27]]
      break;

    case params.type = "洋裝":
      menuData = [data[28]]
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