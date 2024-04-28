import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card3.module.css";

export type Card3Type = {
  boldDesignToolsRulerCross?: string;
  heading?: string;
  paragraph?: string;
  text?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Card3: FunctionComponent<Card3Type> = ({
  boldDesignToolsRulerCross,
  heading,
  paragraph,
  text,
  propBorderRadius,
  propMinWidth,
}) => {
  const boldDesignToolsRulerCStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const headingStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.iconContainer}>
            <img
              className={styles.boldDesignToolsRulerC}
              loading="lazy"
              alt=""
              src={boldDesignToolsRulerCross}
              style={boldDesignToolsRulerCStyle}
            />
          </div>
          <h2 className={styles.heading} style={headingStyle}>
            {heading}
          </h2>
        </div>
        <div className={styles.subContainer1}>
          <div className={styles.button}>
            <img className={styles.icon} alt="" src="/icon-7.svg" />
          </div>
          <div className={styles.text}>Book A Call</div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.paragraph}>{paragraph}</div>
        <div className={styles.text1}>{text}</div>
      </div>
    </div>
  );
};

export default Card3;
