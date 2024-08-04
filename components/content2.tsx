import type { NextPage } from "next";
import styles from "./content2.module.css";

export type Content2Type = {
  className?: string;
};

const Content2: NextPage<Content2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.content2, className].join(" ")}>
      <div className={styles.testimonialQuote}>
        <img
          className={styles.page1Icon}
          loading="lazy"
          alt=""
          src="/page1@2x.png"
        />
        <div className={styles.testimonialAuthor}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group-6@2x.png"
          />
        </div>
        <div className={styles.testimonialAuthor1}>
          <img
            className={styles.weWork1}
            loading="lazy"
            alt=""
            src="/we-work-1.svg"
          />
        </div>
        <div className={styles.testimonialAuthor2}>
          <img
            className={styles.maskGroupIcon1}
            loading="lazy"
            alt=""
            src="/mask-group-7@2x.png"
          />
        </div>
        <div className={styles.testimonialAuthor3}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group.svg"
          />
        </div>
        <div className={styles.testimonialAuthor3}>
          <img
            className={styles.maskGroupIcon2}
            loading="lazy"
            alt=""
            src="/mask-group-8@2x.png"
          />
        </div>
      </div>
      <div className={styles.questionItem}>
        <div className={styles.cardItem}>
          <h2 className={styles.h3}>
            <p
              className={styles.subscribeForLatest}
            >{`Subscribe For Latest `}</p>
            <p className={styles.subscribeForLatest}>Newsletter</p>
          </h2>
          <div className={styles.answerItem}>
            <div className={styles.formControlInputStyle1}>
              <div className={styles.yourEmailWrapper}>
                <div className={styles.yourEmail}>Your Email</div>
              </div>
              <button className={styles.btn}>
                <div className={styles.footerContainer}>Subscribe</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
