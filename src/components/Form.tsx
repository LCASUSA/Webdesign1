import { FunctionComponent } from "react";
import styles from "./Form.module.css";

const Form: FunctionComponent = () => {
  return (
    <div className={styles.form}>
      <div className={styles.heading}>Ask your question</div>
      <div className={styles.line} />
      <div className={styles.formElements}>
        <div className={styles.container}>
          <div className={styles.heading1}>Name</div>
          <div className={styles.inputField}>
            <div className={styles.text}>Enter your name</div>
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.heading2}>Email</div>
          <div className={styles.inputField1}>
            <div className={styles.text1}>Enter your email</div>
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.heading3}>Your Question</div>
          <div className={styles.inputField2}>
            <div className={styles.text2}>Enter Your Question Here .....</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.text3}>Send Your Message</div>
      </div>
    </div>
  );
};

export default Form;
