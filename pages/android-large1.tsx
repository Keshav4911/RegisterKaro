import type { NextPage } from "next";
import Navigation3 from "../components/navigation3";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent9 from "../components/frame-component9";
import FrameComponent11 from "../components/frame-component11";
import FrameComponent12 from "../components/frame-component12";
import TitleSubtitleDark from "../components/title-subtitle-dark";
import FrameComponent13 from "../components/frame-component13";
import Consultation from "../components/consultation";
import AndroidLarge2 from "../components/android-large2";
import FrameComponent14 from "../components/frame-component14";
import FAQ from "../components/f-a-q";
import FormContent from "../components/form-content";
import Footer2 from "../components/footer2";
import FrameComponent10 from "../components/frame-component10";
import styles from "./android-large1.module.css";

const AndroidLarge1: NextPage = () => {
  return (
    <div className={styles.androidLarge2}>
      <section className={styles.flashSaleParent}>
        <header className={styles.flashSale}>
          <div className={styles.flashSale20Container}>
            <span className={styles.forNewClients}>{`Flash sale `}</span>
            <b>20% Discount</b>
            <span className={styles.forNewClients}>
              {" "}
              for New Clients, use code “
            </span>
            <b>QUICK20</b>
            <span className={styles.forNewClients}>” at Checkout!</span>
          </div>
        </header>
        <Navigation3 />
        <FrameComponent8 />
      </section>
      <FrameComponent9 />
      <FrameComponent11 />
      <FrameComponent12 />
      <section className={styles.androidLarge2Inner}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-21441@2x.png"
        />
      </section>
      <section className={styles.titleSubtitleBlock}>
        <div className={styles.titleSubtitleContent}>
          <TitleSubtitleDark
            propFlex="unset"
            propAlignSelf="stretch"
            propPadding="0px 13px 0px 0px"
            propMargin="0"
            propHeight="60px"
            propFontWeight="700"
          />
          <div className={styles.vestibulumSitAmetContainer}>
            <p className={styles.whetherYoureAn}>
              Whether you're an established enterprise or a scaling startup,
              your Virtual office should drive your business forward. Our
              virtual office solutions take your business places! (Accessible.
              Affordable. Adaptable)
            </p>
          </div>
        </div>
      </section>
      <FrameComponent13 />
      <Consultation />
      <AndroidLarge2 />
      <FrameComponent14 />
      <FAQ />
      <section className={styles.androidLarge3}>
        <div className={styles.androidLarge3Child} />
        <FormContent />
        <Footer2 />
        <FrameComponent10 />
        <div className={styles.copyrightParent}>
          <div className={styles.copyright}>
            <b className={styles.safeLedgerPrivate}>
              © 2024 - Safe Ledger Private Limited. All rights reserved.
            </b>
          </div>
          <img
            className={styles.footerBackgroundIcon}
            alt=""
            src="/footer-background@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default AndroidLarge1;
