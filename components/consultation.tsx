import type { NextPage } from "next";
import styles from "./consultation.module.css";

export type ConsultationType = {
  className?: string;
};

const Consultation: NextPage<ConsultationType> = ({ className = "" }) => {
  return (
    <section className={[styles.consultation, className].join(" ")}>
      <div className={styles.consultationInner}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-32341@2x.png"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/rectangle-32421@2x.png"
            />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.lineDiv} />
            <div className={styles.bookAFreeContainer}>
              <span
                className={styles.bookAFree}
              >{`Book a free CONSULTATION with our `}</span>
              <b>CA/CS</b>
              <span className={styles.bookAFree}>{` and `}</span>
              <b>company formation</b>
              <span className={styles.bookAFree}> expert.</span>
            </div>
            <button className={styles.expertButton}>
              <b className={styles.talkToAn}>Talk to an Expert</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
