import { useParams } from "react-router-dom";
import Product from "../../components/CardGroups";
import TypeMenu from "../../components/TypeMenu";

function Kids(props) {
  const { data } = props;
  const { type } = useParams();

  const getType = (type) =>
    data.filter((item) => item.gender === "kids" && item.type === type);

  const types = {
    洋裝: getType("洋裝"),
    外套: getType("外套"),
    下身: getType("下身"),
    上衣: getType("上衣"),
  };

  const content = types[type] || [];

  return (
    <>
      <TypeMenu path={"kids"} menu={["上衣", "下身", "外套", "洋裝"]} />

      <Product title={""} data={content} />
    </>
  );
}

export default Kids;
