import type { NextPage } from "next";
import styles from "./frame-component11.module.css";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: NextPage<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.downloadContentWrapper, className].join(" ")}>
      <div className={styles.downloadContent}>
        <div className={styles.downloadTitleParent}>
          <div className={styles.downloadTitle}>
            <div className={styles.freeDownload}>FREE DOWNLOAD:</div>
          </div>
          <b className={styles.theUltimateChecklist}>
            The ultimate checklist for virtual office 2024
          </b>
        </div>
        <div className={styles.discoverTheStepByStepContainer}>
          <p className={styles.discoverTheStepByStep}>
            Discover the step-by-step procedures and
          </p>
          <p className={styles.discoverTheStepByStep}>
            essential considerations you need to know
          </p>
          <p className={styles.discoverTheStepByStep}>
            before setting up a Virtual Office in India.
          </p>
        </div>
        <div className={styles.downloadCta}>
          <img
            className={styles.group100000576811}
            loading="lazy"
            alt=""
            src="/group-10000057681-11@2x.png"
          />
        </div>
        <div className={styles.googleReviewsWrapper}>
          <div className={styles.googleReviews}>
            <div className={styles.googleReviews1}>
              <div className={styles.googleReviews2}>
                <div className={styles.reviewsRating}>
                  <div className={styles.starRating}>
                    <img
                      className={styles.starIcon}
                      alt=""
                      src="/star@2x.png"
                    />
                    <div className={styles.ratingSeparator}>4.7/5</div>
                  </div>
                  <div className={styles.ratingDivider} />
                  <div className={styles.kHappyReviews}>
                    15.7K+ Happy Reviews
                  </div>
                </div>
              </div>
              <div className={styles.googleIcon}>
                <img
                  className={styles.socialIcons}
                  loading="lazy"
                  alt=""
                  src="/social-icons.svg"
                />
              </div>
            </div>
            <img
              className={styles.googleReviewsChild}
              loading="lazy"
              alt=""
              src="/frame-1000005773@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent11;
