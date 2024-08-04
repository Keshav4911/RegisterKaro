import type { NextPage } from "next";
import TitleSubtitleDark from "./title-subtitle-dark";
import FeatureItem from "./feature-item";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.benefitsContainerWrapper, className].join(" ")}>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitOne}>
          <TitleSubtitleDark />
        </div>
        <div className={styles.benefitOneContent}>
          <div className={styles.benefitOneGraphic}>
            <img
              className={styles.benefitOneGraphicChild}
              loading="lazy"
              alt=""
              src="/rectangle-2144@2x.png"
            />
          </div>
          <div className={styles.benefitOneDescription}>
            <div className={styles.featureList}>
              <div className={styles.vestibulumSitAmetContainer}>
                <p className={styles.whetherYoureAn}>
                  Whether you're an established enterprise or a scaling startup,
                  your Virtual office should drive your business forward. Our
                  virtual office solutions take your business places!
                  (Accessible. Affordable. Adaptable)
                </p>
              </div>
              <div className={styles.featureDescription}>
                <FeatureItem
                  androidCheckmarkCircle="/androidcheckmarkcircle@2x.png"
                  nullaLobortisNunc={`Professional Image & Enhanced Credibility`}
                  interdumEtMalesuad="Elevate your company's image and attract top talent with a professional virtual address for websites, business cards, and marketing materials."
                />
                <div className={styles.featureItem}>
                  <div className={styles.nullaLobortisNunc}>
                    Unmatched Work Flexibility
                  </div>
                  <div className={styles.interdumEtMalesuad}>
                    Improve work-life balance by eliminating commutes and
                    allowing flexible schedules.
                  </div>
                  <div className={styles.locationItem}>
                    <div className={styles.locationBackground} />
                    <img
                      className={styles.androidLocateIcon}
                      loading="lazy"
                      alt=""
                      src="/androidlocate@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.featureItem1}>
              <div className={styles.speedItem}>
                <div className={styles.speedIcon}>
                  <div className={styles.speedGlyph}>
                    <div className={styles.speedBackground}>
                      <div className={styles.itemTitle} />
                      <img
                        className={styles.speedometerIcon}
                        loading="lazy"
                        alt=""
                        src="/speedometer.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.nullaLobortisNunc1}>
                    Streamlined Business Operations
                  </div>
                </div>
                <div className={styles.interdumEtMalesuad1}>
                  Access essential services like virtual assistants, answering
                  services, and teleconferencing – all under one roof.
                </div>
              </div>
              <FeatureItem
                propMinWidth="140px"
                propBackgroundColor="#fbeabb"
                androidCheckmarkCircle="/androidbulb@2x.png"
                nullaLobortisNunc={`Scalable & Cost-Effective Solution`}
                interdumEtMalesuad="Choose a virtual office plan that fits your needs and budget, with options for various locations and service levels."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
