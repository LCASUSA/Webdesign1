import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card2.module.css";

export type Card2Type = {
  boldEssentionalUIMagicSti?: string;
  heading?: string;
  text?: string;
  text1?: string;
  paragraph?: string;

  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];
};

const Card2: FunctionComponent<Card2Type> = ({
  boldEssentionalUIMagicSti,
  heading,
  text,
  text1,
  paragraph,
  propMarginLeft,
}) => {
  const imageGalleryStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.iconContainer}>
            <img
              className={styles.boldEssentionalUiMagic}
              loading="lazy"
              alt=""
              src={boldEssentionalUIMagicSti}
            />
          </div>
          <div className={styles.heading}>{heading}</div>
        </div>
        <div className={styles.subContainer1}>
          <div className={styles.button}>
            <img className={styles.icon} alt="" src="/icon-7.svg" />
          </div>
          <div className={styles.text}>Details</div>
        </div>
      </div>
      <div className={styles.container1}>
        <div className={styles.textContainer}>
          <div className={styles.text1}>Category</div>
          <div className={styles.shapeWrapper}>
            <div className={styles.shape} />
          </div>
          <div className={styles.text2}>{text}</div>
        </div>
        <div className={styles.imageGallery} style={imageGalleryStyle}>
          <div className={styles.textContainer1}>
            <div className={styles.text3}>Time Taken</div>
            <div className={styles.shapeContainer}>
              <div className={styles.shape1} />
            </div>
            <div className={styles.text4}>{text1}</div>
          </div>
        </div>
      </div>
      <div className={styles.paragraph}>{paragraph}</div>
    </div>
  );
};

export default Card2;
