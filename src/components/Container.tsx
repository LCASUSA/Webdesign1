import { FunctionComponent } from "react";
import SubContainer2 from "./SubContainer2";
import Card1 from "./Card1";
import styles from "./Container.module.css";

const Container: FunctionComponent = () => {
  return (
    <section className={styles.container}>
      <SubContainer2
        heading="Testimonials"
        text="ALL Testimonials"
        propWidth="1409px"
        propMinWidth="unset"
        propDisplay="unset"
      />
      <div className={styles.itemsContainer}>
        <Card1
          heading="NexGen turned our business around!"
          paragraph="Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!"
          image="/image-13@2x.png"
          name1="Sarah Thompson"
          authorRole="CEO of BlueBloom"
        />
        <Card1
          heading="NexGen turned our business around!"
          paragraph="Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!"
          image="/image-14@2x.png"
          name1="Wade Warren"
          authorRole="Art Director"
        />
        <Card1
          heading="Working with NexGen was a pleasure."
          paragraph="Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive."
          image="/image-15@2x.png"
          name1="Lisa Williams"
          authorRole="CEO Of HealthTech"
        />
        <Card1
          heading="NexGen's web design team brought our vision to life."
          paragraph="Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement."
          image="/image-16@2x.png"
          name1="Jennifer Lee"
          authorRole="COO of Foodie Haven"
        />
      </div>
    </section>
  );
};

export default Container;
