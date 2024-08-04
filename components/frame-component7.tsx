import type { NextPage } from "next";
import styles from "./frame-component7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  return (
    <div className={[styles.fAQTitleWrapper, className].join(" ")}>
      <div className={styles.fAQTitle}>
        <div className={styles.mapHeaderWrapper}>
          <div className={styles.mapHeader}>
            <div className={styles.locationName}>
              <h1 className={styles.questionsInMind}>Questions in mind?</h1>
            </div>
            <div className={styles.locationName1}>
              <h3 className={styles.readOurFaq}>Read our FAQ</h3>
            </div>
            <div className={styles.mapLabel}>
              <div className={styles.largeMap} />
              <div className={styles.largeMap} />
            </div>
          </div>
        </div>
        <div className={styles.fAQDivider}>
          <div className={styles.questionList}>
            <div className={styles.howCanA}>
              How can a virtual office benefit my business in India?
            </div>
            <div className={styles.fAQHeader}>
              <img
                className={styles.fAQHeaderChild}
                alt=""
                src="/group-356221.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.fAQDivider}>
          <div className={styles.questionList}>
            <div className={styles.canILegally}>
              Can I legally register my business using a virtual office address
              in India?
            </div>
            <div className={styles.frameWrapper}>
              <img
                className={styles.fAQHeaderChild}
                alt=""
                src="/group-35621.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.fAQDivider}>
          <div className={styles.howWillIReceiveMyBusinessParent}>
            <div className={styles.howWillI}>
              How will I receive my business mail and packages with a virtual
              office?
            </div>
            <div className={styles.frameContainer}>
              <img
                className={styles.fAQHeaderChild}
                alt=""
                src="/group-35621-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.fAQDivider3}>
          <div className={styles.canIUseAVirtualOfficeAddParent}>
            <div className={styles.canIUse}>
              Can I use a virtual office address for official correspondence and
              marketing materials?
            </div>
            <div className={styles.frameContainer}>
              <img
                className={styles.fAQHeaderChild}
                alt=""
                src="/group-35621-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.doVirtualOfficeServicesInParent}>
          <div className={styles.doVirtualOffice}>
            Do virtual office services in India include call answering and
            forwarding?
          </div>
          <div className={styles.frameContainer}>
            <img
              className={styles.fAQHeaderChild}
              alt=""
              src="/group-35621-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
