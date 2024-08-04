import type { NextPage } from "next";
import styles from "./company-logos.module.css";

export type CompanyLogosType = {
  className?: string;
};

const CompanyLogos: NextPage<CompanyLogosType> = ({ className = "" }) => {
  return (
    <div className={[styles.companyLogos, className].join(" ")}>
      <div className={styles.logosContainer}>
        <div className={styles.logoRows}>
          <div className={styles.logoRowOne}>
            <img
              className={styles.logoRowOneChild}
              loading="lazy"
              alt=""
              src="/group-1000005763@2x.png"
            />
          </div>
          <img
            className={styles.logoRowsChild}
            loading="lazy"
            alt=""
            src="/group-1000005764.svg"
          />
        </div>
      </div>
      <div className={styles.sectionParent}>
        <div className={styles.section}>
          <div className={styles.feedbackContent}>
            <h1 className={styles.clientTestimonials}>Client Testimonials</h1>
            <div className={styles.weLoveHearing}>
              We love hearing feedback from our valued clients. Here's what some
              of our satisfied customers have to say about our services.
            </div>
          </div>
          <div className={styles.testimonialExample}>
            <div className={styles.testimonialImageParent}>
              <img
                className={styles.testimonialImageIcon}
                alt=""
                src="/testimonial-image@2x.png"
              />
              <div className={styles.clientDetails}>
                <div className={styles.clientName}>
                  <b className={styles.shruti}>SHRUTI</b>
                </div>
                <div className={styles.ceo}>{`CEO `}</div>
              </div>
              <div className={styles.ratingStars}>
                <img
                  className={styles.ratingStarsChild}
                  loading="lazy"
                  alt=""
                  src="/group-48095366.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.clientImageDataOneParent}>
          <img
            className={styles.clientImageDataOne}
            alt=""
            src="/client-image-data-one@2x.png"
          />
          <img
            className={styles.clientImageDataTwo}
            loading="lazy"
            alt=""
            src="/rectangle-2134@2x.png"
          />
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.clientImageDataOne}
            alt=""
            src="/rectangle-2128@2x.png"
          />
          <img
            className={styles.clientImageDataTwo}
            loading="lazy"
            alt=""
            src="/rectangle-2136@2x.png"
          />
        </div>
        <b className={styles.vartika}>vARTIKA</b>
        <div className={styles.rectangleGroup}>
          <img
            className={styles.clientImageDataOne}
            loading="lazy"
            alt=""
            src="/rectangle-2131@2x.png"
          />
          <div className={styles.rectangleDiv} />
        </div>
        <b className={styles.kartik}>KARTIK</b>
        <div className={styles.rectangleContainer}>
          <img
            className={styles.clientImageDataOne}
            alt=""
            src="/rectangle-2129@2x.png"
          />
          <img
            className={styles.clientImageDataOne}
            loading="lazy"
            alt=""
            src="/rectangle-2135@2x.png"
          />
        </div>
        <b className={styles.amit}>AMIT</b>
        <div className={styles.groupDiv}>
          <img
            className={styles.clientImageDataOne}
            alt=""
            src="/rectangle-2132@2x.png"
          />
          <img
            className={styles.clientImageDataOne}
            loading="lazy"
            alt=""
            src="/rectangle-2138@2x.png"
          />
        </div>
        <b className={styles.lauren}>Lauren</b>
        <b className={styles.suraj}>SURAJ</b>
        <div className={styles.rectangleParent1}>
          <img
            className={styles.clientImageDataOne}
            alt=""
            src="/rectangle-2133@2x.png"
          />
          <img
            className={styles.clientImageDataOne}
            loading="lazy"
            alt=""
            src="/rectangle-2137@2x.png"
          />
        </div>
        <b className={styles.lokesh}>LOKESH</b>
      </div>
    </div>
  );
};

export default CompanyLogos;
