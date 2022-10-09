
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductMenu from "./ProductMenu";
import Product from "./Product";
import { content } from "../App.js"




function WomenPage() {

  const data = useContext(content)

  const params = useParams()

  let menuData;

  switch(params.type){
    case params.type = "上衣":
      menuData = [data[3],data[4],data[5],data[6]]
      break;

    case params.type = "下身":
      menuData = [data[7],data[8]]
      break;

    case params.type = "洋裝":
      menuData = [data[9],data[10]]
      break;

    case params.type = "外套":
      menuData = [data[0],data[1],data[2]]
      break;

    case params.type = "配件":
      menuData = [data[11]]
      break;

    default:
      break;
  }


  return (
    <>
      <ProductMenu path={"women"} menu={["上衣","下身","洋裝","外套","配件"]} />

      <Product title={""} data={menuData} />
    </>
  )
}

export default WomenPage;