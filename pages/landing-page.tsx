import type { NextPage } from "next";
import Background from "../components/background";
import FrameComponent5 from "../components/frame-component5";
import StepsContainer from "../components/steps-container";
import FrameComponent4 from "../components/frame-component4";
import ConsultationButton from "../components/consultation-button";
import Content2 from "../components/content2";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent7 from "../components/frame-component7";
import Footer1 from "../components/footer1";
import styles from "./landing-page.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage1}>
      <header className={styles.discountBanner}>
        <h1 className={styles.flashSale20Container}>
          <span className={styles.flashSale}>{`Flash sale `}</span>
          <b>20% Discount</b>
          <span className={styles.flashSale}> for New Clients, use code “</span>
          <b>QUICK20</b>
          <span className={styles.flashSale}>” at Checkout!</span>
        </h1>
      </header>
      <main className={styles.header6}>
        <Background />
        <div className={styles.navbarToggler}>
          <div className={styles.navbarTogglerIcon} />
        </div>
        <section className={styles.features}>
          <div className={styles.row}>
            <div className={styles.colMd4}>
              <div className={styles.cardItem}>
                <img
                  className={styles.icnResizeIcnMd}
                  loading="lazy"
                  alt=""
                  src="/icn-resize-icnmd.svg"
                />
                <h2 className={styles.h3FeatureTitle1}>Unleash Flexibility</h2>
                <div className={styles.paragraph}>
                  Work from anywhere in India with a prestigious virtual
                  address.
                </div>
              </div>
            </div>
            <div className={styles.colMd4}>
              <div className={styles.cardItem}>
                <img
                  className={styles.icnResizeIcnMd}
                  loading="lazy"
                  alt=""
                  src="/icn-resize-icnmd.svg"
                />
                <h2 className={styles.h3FeatureTitle1}>Simplify Operations</h2>
                <div className={styles.paragraph1}>
                  Get a mailing address, access GST registration, and enjoy
                  streamlined services.
                </div>
              </div>
            </div>
            <div className={styles.colMd42}>
              <div className={styles.cardItem2}>
                <img
                  className={styles.icnResizeIcnMd}
                  loading="lazy"
                  alt=""
                  src="/icn-resize-icnmd1.svg"
                />
                <h2 className={styles.h3FeatureTitle1}>Boost Credibility</h2>
                <div className={styles.paragraph2}>
                  Project a professional image and attract top talent
                  nationwide.
                </div>
              </div>
            </div>
          </div>
        </section>
        <FrameComponent5 />
        <section className={styles.stepsContainerParent}>
          <StepsContainer />
          <FrameComponent4 />
          <ConsultationButton />
          <Content2 />
          <FrameComponent6 />
          <FrameComponent7 />
        </section>
        <div className={styles.header6Child} />
        <div className={styles.header6Item} />
        <div className={styles.header6Inner} />
        <Footer1 />
      </main>
    </div>
  );
};

export default LandingPage;
