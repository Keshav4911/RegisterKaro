import type { NextPage } from "next";
import styles from "./link1.module.css";

export type Link1Type = {
  className?: string;
};

const Link1: NextPage<Link1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.link, className].join(" ")}>
      <div className={styles.solutionLinkIcons}>
        <img
          className={styles.platformIconsvg}
          loading="lazy"
          alt=""
          src="/platform-iconsvg.svg"
        />
      </div>
      <div className={styles.solutionLinkTitles}>
        <div className={styles.solutionLinkTitleDetails}>
          <div className={styles.heading2} />
          <div className={styles.ourSolutions}>Our solutions</div>
        </div>
        <div className={styles.appTitle}>
          <div className={styles.browseOurFullContainer}>
            <p className={styles.browseOurFull}>Browse our full range of</p>
            <p className={styles.browseOurFull}>products and services</p>
          </div>
          <img className={styles.appTitleChild} alt="" src="/arrow-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Link1;
