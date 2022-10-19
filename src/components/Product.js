import styles from "./Product.module.css";
import Item from "./Item";

function Product(props) {
  const title = props.title;
  const productData = props.data;

  return (
    <div className={`container-fluid ${styles.product}`}>
      <div className={styles.productTitle}>{title}</div>

      <div className={`row ${styles.wrap}`}>
        {productData.map((data) => (
          <Item
            key={data.id}
            path={data.location}
            imgSrc={data.img}
            data={[data.name, data.price]}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;
