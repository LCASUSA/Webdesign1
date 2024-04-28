import { FunctionComponent } from "react";
import styles from "./SubContainer.module.css";

const SubContainer: FunctionComponent = () => {
  return (
    <div className={styles.subContainer}>
      <h1 className={styles.heading}>
        Ready to Transform Your Digital Presence?
      </h1>
      <div className={styles.frameParent}>
        <div className={styles.paragraphWrapper}>
          <div className={styles.paragraph}>
            Take the first step towards digital success with NexGen by your
            side. Our team of experts is eager to craft tailored solutions that
            drive growth for your business.
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.text}>Get in Touch</div>
          <img className={styles.icon} alt="" src="/icon-2.svg" />
        </div>
      </div>
    </div>
  );
};

export default SubContainer;
