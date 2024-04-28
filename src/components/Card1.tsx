import { FunctionComponent } from "react";
import styles from "./Card1.module.css";

export type Card1Type = {
  heading?: string;
  paragraph?: string;
  image?: string;
  name1?: string;
  authorRole?: string;
};

const Card1: FunctionComponent<Card1Type> = ({
  heading,
  paragraph,
  image,
  name1,
  authorRole,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.paragraph}>{paragraph}</div>
      </div>
      <div className={styles.container1}>
        <div className={styles.subContainer}>
          <img className={styles.imageIcon} alt="" src={image} />
          <div className={styles.textContainer}>
            <div className={styles.name}>{name1}</div>
            <div className={styles.authorRole}>{authorRole}</div>
          </div>
        </div>
        <div className={styles.button}>
          <img className={styles.icon} alt="" src="/icon-15.svg" />
        </div>
      </div>
    </div>
  );
};

export default Card1;
