import { useParams } from "react-router-dom";
import Product from "../../components/CardGroups";
import TypeMenu from "../../components/TypeMenu";

function Men(props) {
  const { data } = props;
  const { type } = useParams();

  const getType = (type) =>
    data.filter((item) => item.gender === "men" && item.type === type);

  const types = {
    上衣: getType("上衣"),
    下身: getType("下身"),
    外套: getType("外套"),
    運動服裝: getType("運動服裝"),
    配件: getType("配件"),
  };

  const content = types[type] || [];

  return (
    <>
      <TypeMenu
        path={"men"}
        menu={["上衣", "下身", "外套", "運動服裝", "配件"]}
      />

      <Product title={""} data={content} />
    </>
  );
}

export default Men;
