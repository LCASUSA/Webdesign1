import { FunctionComponent } from "react";
import HomeNavbarButtonsHeader from "../components/HomeNavbarButtonsHeader";
import FrameComponent3 from "../components/FrameComponent3";
import SubContainer3 from "../components/SubContainer3";
import Container2 from "../components/Container2";
import Container1 from "../components/Container1";
import FrameComponent2 from "../components/FrameComponent2";
import Container from "../components/Container";
import SubContainer2 from "../components/SubContainer2";
import FrameComponent1 from "../components/FrameComponent1";
import Form from "../components/Form";
import SubContainer from "../components/SubContainer";
import FrameComponent from "../components/FrameComponent";
import styles from "./HomePageDesktop.module.css";

const HomePageDesktop: FunctionComponent = () => {
  return (
    <div className={styles.homePageDesktop}>
      <section className={styles.navbarParent}>
        <HomeNavbarButtonsHeader />
        <FrameComponent3 />
        <SubContainer3 />
      </section>
      <Container2 />
      <Container1 />
      <FrameComponent2 />
      <Container />
      <section className={styles.subContainerParent}>
        <SubContainer2
          heading="Frequently Asked Questions"
          text="View All"
          propWidth="1545px"
          propMinWidth="97px"
          propDisplay="inline-block"
        />
        <div className={styles.frameParent}>
          <FrameComponent1 />
          <Form />
        </div>
      </section>
      <section className={styles.subContainerGroup}>
        <SubContainer />
        <div className={styles.subContainer}>
          <div className={styles.footerLinkSet}>Follow Us on Social Media</div>
          <div className={styles.footerLinkSet1}>
            <div className={styles.shape} />
          </div>
          <div className={styles.footerLinkSet2}>Follow Us on Social Media</div>
          <div className={styles.footerLinkSet3}>
            <div className={styles.shape1} />
          </div>
          <div className={styles.footerLinkSet4}>Follow Us on Social Media</div>
          <div className={styles.footerLinkSet5}>
            <div className={styles.shape2} />
          </div>
          <div className={styles.footerLinkSet6}>Follow Us on Social Media</div>
          <div className={styles.footerLinkSet7}>
            <div className={styles.shape3} />
          </div>
          <div className={styles.footerLinkSet8}>Follow Us on Social Media</div>
          <div className={styles.footerLinkSet9}>
            <div className={styles.shape4} />
          </div>
          <div className={styles.footerLinkSet10}>
            Follow Us on Social Media
          </div>
        </div>
        <FrameComponent />
      </section>
    </div>
  );
};

export default HomePageDesktop;
