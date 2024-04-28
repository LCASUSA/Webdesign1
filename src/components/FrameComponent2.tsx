import { FunctionComponent } from "react";
import SubContainer2 from "./SubContainer2";
import Card2 from "./Card2";
import SubContainer1 from "./SubContainer1";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.testimonialContentWrapper}>
      <div className={styles.testimonialContent}>
        <SubContainer2 heading="Our Works" text="ALL Works" />
        <div className={styles.testimonialCards}>
          <div className={styles.testimonialAndImageLayout}>
            <Card2
              boldEssentionalUIMagicSti="/bold--essentional-ui--magic-stick-2.svg"
              heading="Zenith Fitness App"
              text="Mobile App Development"
              text1="6 months"
              paragraph="An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes."
            />
            <img className={styles.imageIcon} alt="" src="/image-1@2x.png" />
            <SubContainer1
              text="React Native"
              text1="Firebase"
              featureDetails="Redux"
              featureDetails1="REST API"
              featureDetails2="MongoDB"
              image="/image-2@2x.png"
              image1="/image-3@2x.png"
              image2="/image-4@2x.png"
              image3="/image-5@2x.png"
              image4="/image-6@2x.png"
            />
            <Card2
              boldEssentionalUIMagicSti="/bold--essentional-ui--balloon.svg"
              heading="A-Aura Ecommerce"
              text={`Web Design & Development`}
              text1="3 months"
              paragraph="A complete overhaul of a corporate website to enhance its brand identity and user experience."
              propMarginLeft="-345px"
            />
            <img className={styles.imageIcon1} alt="" src="/image-7@2x.png" />
            <SubContainer1
              text="WordPress"
              text1="PHP"
              featureDetails="HTML5"
              featureDetails1="CSS3"
              featureDetails2="JavaScript"
              image="/image-8@2x.png"
              image1="/image-9@2x.png"
              image2="/image-10@2x.png"
              image3="/image-11@2x.png"
              image4="/image-3@2x.png"
              propMinWidth="87px"
              propMinWidth1="29px"
              propMinWidth2="39px"
              propMinWidth3="97px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
