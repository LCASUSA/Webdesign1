import { FunctionComponent } from "react";
import FAQItem from "./FAQItem";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.faqItemOpenParent}>
      <div className={styles.faqItemOpen}>
        <div className={styles.answerDetails}>
          <div className={styles.heading}>
            How long does it take to complete a web development project?
          </div>
          <div className={styles.answerDivider} />
          <div className={styles.paragraph}>
            The timeline varies depending on the project's complexity and
            requirements. Our team strives to deliver projects on time while
            maintaining the highest quality standards.
          </div>
        </div>
        <div className={styles.button}>
          <img className={styles.icon} alt="" src="/icon-20.svg" />
        </div>
      </div>
      <FAQItem heading="Can you handle large-scale mobile app development projects?" />
      <FAQItem heading="Can you integrate third-party APIs into our mobile app?" />
      <FAQItem heading="How do you ensure cross-platform compatibility for mobile apps?" />
      <FAQItem heading="What is your approach to user experience (UX) design?" />
    </div>
  );
};

export default FrameComponent1;
