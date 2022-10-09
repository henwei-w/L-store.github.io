
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import Item from "./Item";

function Product(props) {

  const title = props.title
  const productData = props.data

  return (
    <div className={`container-fluid ${styles.product}`}>
      <div className={styles.productTitle}>{title}</div>

      <div className={`row ${styles.wrap}`}>

        { productData.map(data => <Item key={data.id} path={data.location} imgSrc={data.img} data={[data.name,data.price]} />) }

      </div>

      <nav aria-label="Page navigation example">
        <ul className={`pagination justify-content-center ${styles.changePage}`}>
          <li className={`page-item`}>
            <Link className={`page-link`} to="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>
          <li className={`page-item active`}><Link className={`page-link`} to="#">1</Link></li>
          <li className={`page-item`}><Link className={`page-link`} to="#">2</Link></li>
          <li className={`page-item`}><Link className={`page-link`} to="#">3</Link></li>
          <li className={`page-item`}>
            <Link className={`page-link`} to="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default Product;