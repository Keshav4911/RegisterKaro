import type { NextPage } from "next";
import styles from "./link2.module.css";

export type Link2Type = {
  className?: string;
};

const Link2: NextPage<Link2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.link, className].join(" ")}>
      <div className={styles.expertIconsvgWrapper}>
        <img
          className={styles.expertIconsvg}
          loading="lazy"
          alt=""
          src="/expert-iconsvg@2x.png"
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.heading2Parent}>
          <div className={styles.heading2} />
          <div className={styles.talkToUs}>Talk to us</div>
          <div className={styles.heading21} />
          <div className={styles.heading22} />
          <div className={styles.heading23} />
          <div className={styles.heading24} />
        </div>
        <div className={styles.getAdviceFromOneOfOurExpParent}>
          <div className={styles.getAdviceFromContainer}>
            <p className={styles.getAdviceFrom}>Get advice from one of our</p>
            <p className={styles.getAdviceFrom}>experts 24/7</p>
          </div>
          <img className={styles.frameChild} alt="" src="/arrow-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Link2;
