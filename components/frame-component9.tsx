import type { NextPage } from "next";
import styles from "./frame-component9.module.css";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: NextPage<FrameComponent9Type> = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.benefitsParent}>
        <h2 className={styles.benefits}>Benefits</h2>
        <div className={styles.reviewsIconParent}>
          <img
            className={styles.reviewsIcon}
            loading="lazy"
            alt=""
            src="/vector-118.svg"
          />
          <div className={styles.newReviews}>New reviews</div>
        </div>
      </div>
      <div className={styles.rowWrapper}>
        <div className={styles.row}>
          <div className={styles.colMd4}>
            <div className={styles.cardItem}>
              <img
                className={styles.icnResizeIcnMd}
                loading="lazy"
                alt=""
                src="/icn-resize-icnmd2.svg"
              />
              <h3 className={styles.h3FeatureTitle1}>Unleash Flexibility</h3>
              <div className={styles.paragraph}>
                Work from anywhere in India with a prestigious virtual address.
              </div>
            </div>
          </div>
          <div className={styles.colMd41}>
            <div className={styles.cardItem}>
              <img
                className={styles.icnResizeIcnMd}
                loading="lazy"
                alt=""
                src="/icn-resize-icnmd2.svg"
              />
              <h3 className={styles.h3FeatureTitle1}>Simplify Operations</h3>
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
                src="/icn-resize-icnmd3.svg"
              />
              <h3 className={styles.h3FeatureTitle1}>Boost Credibility</h3>
              <div className={styles.paragraph2}>
                Project a professional image and attract top talent nationwide.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
