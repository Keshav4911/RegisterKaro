import type { NextPage } from "next";
import styles from "./consultation-button.module.css";

export type ConsultationButtonType = {
  className?: string;
};

const ConsultationButton: NextPage<ConsultationButtonType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.consultationButton, className].join(" ")}>
      <div className={styles.expertButton}>
        <div className={styles.contactInfoWrapper}>
          <div className={styles.contactInfo}>
            <div className={styles.contactImage}>
              <div className={styles.frameParent}>
                <div className={styles.maskGroupWrapper}>
                  <img
                    className={styles.maskGroupIcon}
                    loading="lazy"
                    alt=""
                    src="/mask-group-5@2x.png"
                  />
                </div>
                <h1 className={styles.nullaLobortisNuncContainer}>
                  <b>{`Expert Guidance: `}</b>
                  <span className={styles.consultationAndCompany}>
                    Consultation and Company Formation
                  </span>
                </h1>
              </div>
              <h3 className={styles.bookAFreeContainer}>
                <p
                  className={styles.bookAFree}
                >{`Book a free CONSULTATION with our CA/CS and `}</p>
                <p className={styles.bookAFree}>company formation expert.</p>
              </h3>
            </div>
            <button className={styles.pageIndicator}>
              <b className={styles.talkToAn}>Talk to an Expert</b>
            </button>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-3234@2x.png"
          />
          <div className={styles.formContainer}>
            <img
              className={styles.emailInputIcon}
              loading="lazy"
              alt=""
              src="/rectangle-3242@2x.png"
            />
          </div>
          <div className={styles.subscribeButton}>
            <div className={styles.subscribeButtonChild} />
            <div className={styles.subscribeButtonItem} />
            <div className={styles.testimonialHeader}>
              <h1 className={styles.needOurHelp}>Need our help ?</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationButton;
