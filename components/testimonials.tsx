import type { NextPage } from "next";
import styles from "./testimonials.module.css";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: NextPage<TestimonialsType> = ({ className = "" }) => {
  return (
    <section className={[styles.testimonials, className].join(" ")}>
      <div className={styles.testimonialContent}>
        <div className={styles.trustedCompanies}>
          <h1 className={styles.trustedByThe}>
            Trusted by the world’s largest companies
          </h1>
          <div className={styles.whitespace}>
            <div className={styles.div}>.</div>
          </div>
        </div>
        <div className={styles.companyLogos}>
          <img
            className={styles.page1Icon}
            loading="lazy"
            alt=""
            src="/page11@2x.png"
          />
          <div className={styles.logos}>
            <img
              className={styles.slackRgbIcon}
              loading="lazy"
              alt=""
              src="/slack-rgb@2x.png"
            />
          </div>
          <div className={styles.logos1}>
            <img className={styles.weWork1} alt="" src="/we-work-11.svg" />
          </div>
          <div className={styles.logos2}>
            <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
          </div>
          <div className={styles.groupWrapper}>
            <img className={styles.groupIcon} alt="" src="/group1.svg" />
          </div>
          <div className={styles.logoContainer}>
            <img
              className={styles.iciciBankLogoSymbol1Icon}
              alt=""
              src="/icici-bank-logo-symbol-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
