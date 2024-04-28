import { FunctionComponent } from "react";
import Card from "./Card";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <footer className={styles.containerParent}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <Card
            icon="/icon-26.svg"
            heading="INstagram"
            paragraph="Share visually appealing snippets of our latest web projects."
          />
          <div className={styles.card}>
            <div className={styles.container1}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <div className={styles.logoContainer} />
                  <img
                    className={styles.capa2Icon}
                    loading="lazy"
                    alt=""
                    src="/capa-2.svg"
                  />
                </div>
              </div>
              <div className={styles.button}>
                <img className={styles.icon1} alt="" src="/icon-7.svg" />
              </div>
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.heading}>Twitter</h2>
              <div className={styles.paragraph}>
                Tweet about interesting coding challenges you've overcome.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer1}>
          <Card
            icon="/icon-29.svg"
            heading="Dribbble"
            paragraph="Showcase design elements of our web projects."
          />
          <Card
            icon="/icon-31.svg"
            heading="Behance"
            paragraph="Create detailed presentations for our projects."
          />
        </div>
      </div>
      <div className={styles.subContainerParent}>
        <div className={styles.subContainer2}>
          <div className={styles.container2}>
            <b className={styles.heading1}>Home</b>
            <div className={styles.linksContainer}>
              <div className={styles.textButton}>Why Us</div>
              <div className={styles.textButton1}>About Us</div>
              <div className={styles.textButton2}>Testimonials</div>
              <div className={styles.textButton3}>FAQ’s</div>
            </div>
          </div>
          <div className={styles.container3}>
            <b className={styles.heading2}>Services</b>
            <div className={styles.linksContainer1}>
              <div className={styles.textButton4}>Web Development</div>
              <div className={styles.textButton5}>App Development</div>
              <div className={styles.textButton6}>Web Design</div>
              <div className={styles.textButton7}>Digital Marketing</div>
            </div>
          </div>
          <div className={styles.container4}>
            <b className={styles.heading3}>Projects</b>
            <div className={styles.linksContainer2}>
              <div className={styles.textButton8}>Klothink</div>
              <div className={styles.textButton9}>Zenith</div>
              <div className={styles.textButton10}>Novus</div>
              <div className={styles.textButton11}>Apex</div>
            </div>
          </div>
          <div className={styles.container5}>
            <b className={styles.heading4}>Blogs</b>
            <div className={styles.linksContainer3}>
              <div className={styles.textButton12}>Business</div>
              <div className={styles.container6}>
                <div className={styles.textButton13}>Design</div>
                <div className={styles.subContainer3}>
                  <div className={styles.socialMediaName}>Soon</div>
                </div>
              </div>
              <div className={styles.container7}>
                <div className={styles.textButton14}>Development</div>
                <div className={styles.subContainer4}>
                  <div className={styles.text}>Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer5}>
          <div className={styles.textContainer1}>
            <div className={styles.heading5}>Newsletter</div>
            <h2 className={styles.text1}>Subscribe To our Newsletter</h2>
          </div>
          <div className={styles.container8}>
            <div className={styles.inputField}>
              <div className={styles.emailPlaceholder}>Enter your email</div>
            </div>
            <div className={styles.button1}>
              <img className={styles.icon2} alt="" src="/icon-7.svg" />
            </div>
          </div>
        </div>
        <div className={styles.subContainer6}>
          <div className={styles.copyright}>
            © 2024 NextGen. All rights reserved.
          </div>
          <div className={styles.textButtonParent}>
            <div className={styles.textButton15}>{`Terms & Conditions`}</div>
            <div className={styles.divider} />
            <div className={styles.textButton16}>Privacy Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
