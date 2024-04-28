import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SubContainer1.module.css";

export type SubContainer1Type = {
  text?: string;
  text1?: string;
  featureDetails?: string;
  featureDetails1?: string;
  featureDetails2?: string;
  image?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
  propMinWidth3?: CSSProperties["minWidth"];
};

const SubContainer1: FunctionComponent<SubContainer1Type> = ({
  text,
  text1,
  featureDetails,
  featureDetails1,
  featureDetails2,
  image,
  image1,
  image2,
  image3,
  image4,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
}) => {
  const text1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const text2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const featureDetailsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const featureDetails1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div className={styles.subContainer}>
      <div className={styles.container}>
        <div className={styles.text}>Technologies Used</div>
        <div className={styles.subContainer1}>
          <div className={styles.textContainer}>
            <div className={styles.text1} style={text1Style}>
              {text}
            </div>
          </div>
          <div className={styles.textContainer1}>
            <div className={styles.text2} style={text2Style}>
              {text1}
            </div>
          </div>
          <div className={styles.textContainer2}>
            <div className={styles.featureDetails}>{featureDetails}</div>
          </div>
          <div className={styles.textContainer3}>
            <div className={styles.featureDetails1} style={featureDetailsStyle}>
              {featureDetails1}
            </div>
          </div>
          <div className={styles.textContainer4}>
            <div
              className={styles.featureDetails2}
              style={featureDetails1Style}
            >
              {featureDetails2}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container1}>
        <div className={styles.heading}>Team Members</div>
        <div className={styles.imagesContainer}>
          <img className={styles.imageIcon} alt="" src={image} />
          <img className={styles.imageIcon1} alt="" src={image1} />
          <img className={styles.imageIcon2} alt="" src={image2} />
          <img className={styles.imageIcon3} alt="" src={image3} />
          <img className={styles.imageIcon4} alt="" src={image4} />
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.text3}>Book A Call</div>
      </div>
    </div>
  );
};

export default SubContainer1;
