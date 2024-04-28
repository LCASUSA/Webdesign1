import { FunctionComponent } from "react";
import styles from "./Card.module.css";

export type CardType = {
  icon?: string;
  heading?: string;
  paragraph?: string;
};

const Card: FunctionComponent<CardType> = ({ icon, heading, paragraph }) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <img className={styles.icon} alt="" src={icon} />
        </div>
        <div className={styles.button}>
          <img className={styles.icon1} alt="" src="/icon-7.svg" />
        </div>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.paragraph}>{paragraph}</div>
      </div>
    </div>
  );
};

export default Card;
