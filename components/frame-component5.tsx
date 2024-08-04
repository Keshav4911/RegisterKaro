import type { NextPage } from "next";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section className={[styles.downloadContentWrapper, className].join(" ")}>
      <div className={styles.downloadContent}>
        <img
          className={styles.group100000576811}
          loading="lazy"
          alt=""
          src="/group-10000057681-1@2x.png"
        />
        <div className={styles.downloadWrapper}>
          <div className={styles.downloadWrapperInner}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent}>
                  <div className={styles.freeDownloadParent}>
                    <h1 className={styles.freeDownload}>FREE DOWNLOAD:</h1>
                    <h1 className={styles.theUltimateChecklist}>
                      The ultimate checklist for virtual office 2024
                    </h1>
                  </div>
                  <h2 className={styles.discoverTheStepByStepContainer}>
                    <p className={styles.discoverTheStepByStep}>
                      Discover the step-by-step procedures and
                    </p>
                    <p className={styles.discoverTheStepByStep}>
                      essential considerations you need to know
                    </p>
                    <p className={styles.discoverTheStepByStep}>
                      before setting up a Virtual Office in India.
                    </p>
                  </h2>
                  <button className={styles.downloadButtonContainer}>
                    <div className={styles.sendMeThe}>
                      Send Me The Checklist
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
