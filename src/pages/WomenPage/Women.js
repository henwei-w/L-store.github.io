import TypeMenu from "../../components/TypeMenu";
import CardGroups from "../../components/CardGroups";
import { useParams } from "react-router-dom";
import ScrollToTop from "helpers/ScrollToTop";

function Women(props) {
  const { data } = props;
  const { type } = useParams();

  const getType = (type) =>
    data.filter((item) => item.gender === "women" && item.type === type);

  const types = {
    上衣: getType("上衣"),
    下身: getType("下身"),
    洋裝: getType("洋裝"),
    外套: getType("外套"),
    配件: getType("配件"),
  };
  
  const content = types[type] || [];

  return (
    <>
      <ScrollToTop />
      <TypeMenu
        path={"women"}
        menu={["上衣", "下身", "洋裝", "外套", "配件"]}
      />

      <CardGroups title={""} data={content} />
    </>
  );
}

export default Women;
