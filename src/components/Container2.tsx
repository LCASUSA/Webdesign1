import { FunctionComponent } from "react";
import Card4 from "./Card4";
import styles from "./Container2.module.css";

const Container2: FunctionComponent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          Reasons to Choose NexGen for Your Digital Journey
        </h1>
      </div>
      <div className={styles.itemsContainer}>
        <Card4
          heading="Expertise in Cutting-Edge Technologies"
          paragraph="NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions."
        />
        <Card4
          heading="Proven Track Record of Success"
          paragraph="NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs."
        />
        <Card4
          heading="Client-Centric Approach"
          paragraph="At NexGen, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process."
        />
        <Card4
          heading="Dedicated Team of Professionals"
          paragraph="Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business."
        />
      </div>
    </section>
  );
};

export default Container2;
