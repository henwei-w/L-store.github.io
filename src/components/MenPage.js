
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductMenu from "./ProductMenu";
import Product from "./Product";
import { content } from "../App.js"




function MenPage() {

  const data = useContext(content)

  const params = useParams()

  let menuData;

  switch(params.type){
    case params.type = "上衣":
      menuData = [data[12],data[19],data[21],data[22]]
      break;

    case params.type = "下身":
      menuData = [data[20]]
      break;

    case params.type = "外套":
      menuData = [data[13],data[14],data[15],data[16]]
      break;

    case params.type = "運動服裝":
      menuData = [data[17],data[18]]
      break;

    case params.type = "配件":
      menuData = [data[23]]
      break;

    default:
      break;
  }


  return (
    <>
      <ProductMenu path={"men"} menu={["上衣","下身","外套","運動服裝","配件"]} />

      <Product title={""} data={menuData} />
    </>
  )
}

export default MenPage;