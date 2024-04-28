import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className={styles.containerParent}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroDetails}>
            <div className={styles.headingParent}>
              <h1 className={styles.heading}>Digital Solutions</h1>
              <div className={styles.buttonWrapper}>
                <div className={styles.button}>
                  <img
                    className={styles.icon}
                    loading="lazy"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className={styles.shape} />
                  <div className={styles.text}>Start a Project</div>
                </div>
              </div>
            </div>
            <div className={styles.headingGroup}>
              <h1 className={styles.heading1}>That Drive Success</h1>
              <div className={styles.paragraph}>
                At NexGen, we believe in the transformative power of digital
                solutions. Our team of experts is dedicated to helping
                businesses like yours thrive in the fast-paced digital
                landscape.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.text1}>Digital Marketing</div>
          <div className={styles.shapeWrapper}>
            <div className={styles.shape1} />
          </div>
          <div className={styles.text2}>Website Design</div>
          <div className={styles.shapeContainer}>
            <div className={styles.shape2} />
          </div>
          <div className={styles.text3}>Branding</div>
          <div className={styles.shapeFrame}>
            <div className={styles.shape3} />
          </div>
          <div className={styles.text4}>Website Development</div>
          <div className={styles.frameDiv}>
            <div className={styles.shape4} />
          </div>
          <div className={styles.text5}>Mobile App Development</div>
          <div className={styles.shapeWrapper1}>
            <div className={styles.shape5} />
          </div>
          <div className={styles.text6}>Digital Marketing</div>
        </div>
      </div>
      <div className={styles.container1}>
        <div className={styles.imageParent}>
          <img className={styles.imageIcon} alt="" src="/image.svg" />
          <div className={styles.button1}>
            <img className={styles.icon1} alt="" src="/icon-1.svg" />
            <div className={styles.shape6} />
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.heading2}>Estatein Real Estate</div>
          <div className={styles.paragraph1}>{`Web Development. `}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
