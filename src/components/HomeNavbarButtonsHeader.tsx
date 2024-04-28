import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Button as AntButton } from "antd";
import styles from "./HomeNavbarButtonsHeader.module.css";

const HomeNavbarButtonsHeader: FunctionComponent = () => {
  return (
    <header className={styles.navbar}>
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo.svg" />
      <div className={styles.buttonsContainer}>
        <Button
          name="Home Button"
          variant="primary"
          href="https://toplinescaling.com"
        />
        <div className={styles.button}>
          <div className={styles.text}>Services</div>
        </div>
        <AntButton type="default" />
        <div className={styles.button1}>
          <div className={styles.text1}>About</div>
        </div>
        <div className={styles.button2}>
          <div className={styles.text2}>Careers</div>
        </div>
        <div className={styles.button3}>
          <div className={styles.text3}>Blogs</div>
        </div>
        <div className={styles.button4}>
          <div className={styles.text4}>Contact Us</div>
        </div>
      </div>
    </header>
  );
};

export default HomeNavbarButtonsHeader;
