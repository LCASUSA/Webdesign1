import { FunctionComponent } from "react";
import styles from "./FAQItem.module.css";

export type FAQItemType = {
  heading?: string;
};

const FAQItem: FunctionComponent<FAQItemType> = ({ heading }) => {
  return (
    <div className={styles.faqItem}>
      <div className={styles.questionSummary}>
        <div className={styles.heading}>{heading}</div>
      </div>
      <div className={styles.button}>
        <img className={styles.icon} alt="" src="/icon-21.svg" />
      </div>
    </div>
  );
};

export default FAQItem;
