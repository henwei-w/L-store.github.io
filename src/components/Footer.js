
import styles from "./Footer.module.css";

function Footer() {



  return (
    <div className={styles.footer}>
      <div className={styles.footerText}>
        聯絡資訊
        <p>
          電話： 0912345678<br />
          e-mail: lstore@gmail.com
        </p>
      </div>
      <div className={styles.copyRight}>copyright &copy; Linus Wu 2022.</div>
    </div>
  )
}

export default Footer;