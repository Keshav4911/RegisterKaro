import type { NextPage } from "next";
import Navigation1 from "../components/navigation1";
import SearchCity from "../components/search-city";
import OfficeImage from "../components/office-image";
import FlexiblePaymentsIcon from "../components/flexible-payments-icon";
import ImageGallery from "../components/image-gallery";
import Content1 from "../components/content1";
import GroupComponent from "../components/group-component";
import Testimonials from "../components/testimonials";
import FrameComponent1 from "../components/frame-component1";
import Container from "../components/container";
import Footer from "../components/footer";
import styles from "./index.module.css";

const HomePage: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <Navigation1 />
      <section className={styles.form}>
        <div className={styles.pictureHomepageSerachv2Of}>
          <SearchCity />
          <OfficeImage />
        </div>
      </section>
      <FlexiblePaymentsIcon />
      <ImageGallery />
      <section className={styles.contentParent}>
        <Content1 />
        <GroupComponent />
      </section>
      <Testimonials />
      <FrameComponent1 />
      <Container />
      <Footer />
      <div className={styles.homePageChild} />
    </div>
  );
};

export default HomePage;
