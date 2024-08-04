import type { NextPage } from "next";
import styles from "./expert-consultation.module.css";

export type ExpertConsultationType = {
  className?: string;
};

const ExpertConsultation: NextPage<ExpertConsultationType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.expertConsultation, className].join(" ")}>
      <div className={styles.consultationContentParent}>
        <div className={styles.consultationContent}>
          <div className={styles.talkToAn}>{`Talk to an expert >`}</div>
          <div className={styles.after} />
        </div>
        <div className={styles.contactIcons}>
          <div className={styles.iconsWrapper}>
            <div className={styles.icons}>
              <div className={styles.contactIconOne} />
              <img
                className={styles.contactIconTwo}
                alt=""
                src="/contact-icon-two@2x.png"
              />
              <img
                className={styles.contactIconThree}
                loading="lazy"
                alt=""
                src="/rectangle-2140@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertConsultation;
