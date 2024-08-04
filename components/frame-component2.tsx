import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.launchwiseParentWrapper, className].join(" ")}>
      <div className={styles.launchwiseParent}>
        <div className={styles.launchwiseContent}>
          <h2 className={styles.whyOptFor}>Why Opt for Launchwise?</h2>
          <div className={styles.delegateWorkspaceCustomizati}>
            Delegate workspace customization and management to us, allowing you
            to concentrate on your core business activities while we ensure your
            workspace is primed for growth.
          </div>
        </div>
        <div className={styles.launchwiseFeatures}>
          <div className={styles.launchwiseFeaturesList}>
            <div className={styles.launchwiseFeature}>
              <div className={styles.featureIcon} />
              <img
                className={styles.featureContentIcon}
                alt=""
                src="/frame-2@2x.png"
              />
              <div className={styles.featuresButtonsParent}>
                <img
                  className={styles.featureContentIcon}
                  alt=""
                  src="/frame-2@2x.png"
                />
                <img
                  className={styles.featureContentIcon}
                  alt=""
                  src="/frame-4@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.locationSolutions}>
            <div className={styles.primeOptions}>
              <div className={styles.primeNationwideOptions}>
                Prime Nationwide Options
              </div>
              <div className={styles.exploreOurDiverse}>
                Explore our diverse and unparalleled portfolio of office spaces,
                offering the finest options strategically located across the
                nation
              </div>
            </div>
            <div className={styles.comprehensiveOfficeSolutions}>
              Comprehensive Office Solutions
            </div>
            <div className={styles.comprehensiveOfficeSolutions}>
              Strategically Located Premium Spaces
            </div>
            <div className={styles.costEffectiveSolutionsWith}>
              Cost-Effective Solutions with Modern Amenities
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
