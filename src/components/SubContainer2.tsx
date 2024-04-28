import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SubContainer2.module.css";

export type SubContainer2Type = {
  heading?: string;
  text?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
};

const SubContainer2: FunctionComponent<SubContainer2Type> = ({
  heading,
  text,
  propWidth,
  propMinWidth,
  propDisplay,
}) => {
  const heading1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  return (
    <div className={styles.subContainer}>
      <h1 className={styles.heading} style={heading1Style}>
        {heading}
      </h1>
      <div className={styles.container}>
        <div className={styles.button}>
          <img className={styles.icon} alt="" src="/icon-2.svg" />
        </div>
        <div className={styles.text} style={textStyle}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default SubContainer2;
