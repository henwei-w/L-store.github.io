
import styles from "./ProductMenu.module.css";
import { Link,useParams } from "react-router-dom";



function ProductMenu(props) {

  const menuTitle = props.menu
  const path = props.path
  const params = useParams()

  return (
    <div className={styles.ProductMenu}>

      <div className={styles.wpMenu}>
        <ul>

          { menuTitle.map((data, index) => <Link key={index} to={`/${path}/${params.type = data}`}><li>{data}</li></Link>) }

        </ul>
      </div>

      <div className={styles.block} />

    </div>
  )
}

export default ProductMenu;