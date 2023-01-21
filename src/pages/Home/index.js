
import Banner from "../../components/Banner";
import Sale from "components/Sale";
import Product from "components/CardGroups";
import { content } from "App";
import { useContext } from "react";

function Home() {

  const data = useContext(content);

  return (
    <>
      <Banner />
      <Sale />

      <Product
        title={"新品上市"}
        data={[
          data[0],
          data[1],
          data[2],
          data[10],
          data[13],
          data[14],
          data[15],
          data[16],
        ]}
      />

      <Product
        title={"熱銷商品"}
        data={[
          data[4],
          data[5],
          data[6],
          data[7],
          data[12],
          data[17],
          data[18],
          data[19],
        ]}
      />
    </>
  )
}

export default Home;