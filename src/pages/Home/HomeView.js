import Banner from "../../components/Banner";
import Sale from "components/Sale";
import CardGroups from "components/CardGroups";
import ScrollToTop from "helpers/ScrollToTop";

function HomeView(props) {
  const data = props.data;

  function findObjectsByIds(objects, ids) {
    return objects.filter((obj) => ids.includes(obj.id));
  }

  return (
    <>
      <ScrollToTop />
      <Banner />
      <Sale />

      <CardGroups
        title={"新品上市"}
        data={findObjectsByIds(data, [82, 84, 85, 88, 91, 92, 97, 104])}
        label={"new"}
      />

      <CardGroups
        title={"熱銷商品"}
        data={findObjectsByIds(data, [83, 86, 87, 93, 95, 96, 98, 100])}
      />
    </>
  );
}

export default HomeView;
