import { FunctionComponent } from "react";
import Card3 from "./Card3";
import styles from "./Container1.module.css";

const Container1: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Our Services</h1>
      </div>
      <div className={styles.itemsContainer}>
        <Card3
          boldDesignToolsRulerCross="/bold--design-tools--ruler-cross-pen.svg"
          heading="Web Design"
          paragraph="Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting."
          text="Starts From $1,500"
        />
        <Card3
          boldDesignToolsRulerCross="/bold--electronic-devices--smartphone-2.svg"
          heading="Mobile App Development"
          paragraph="With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go."
          text="Starts From $2,500"
          propBorderRadius="unset"
          propMinWidth="289px"
        />
      </div>
      <div className={styles.itemsContainer1}>
        <Card3
          boldDesignToolsRulerCross="/bold--network-it-programming--code-circle.svg"
          heading="Web Development"
          paragraph="Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites."
          text="Starts From $1,800"
          propBorderRadius="5px"
          propMinWidth="212px"
        />
        <Card3
          boldDesignToolsRulerCross="/bold--settings-fine-tuning--widget-6.svg"
          heading="Digital Marketing"
          paragraph="In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility"
          text="Starts From $1,200"
          propBorderRadius="5px"
          propMinWidth="211px"
        />
      </div>
    </div>
  );
};

export default Container1;
