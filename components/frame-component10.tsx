import type { NextPage } from "next";
import styles from "./frame-component10.module.css";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: NextPage<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.mapWrapper, className].join(" ")}>
      <div className={styles.map}>
        <div className={styles.locationInfo}>
          <div className={styles.locationDetails}>
            <div className={styles.locationName}>
              <div className={styles.palmCourtgurugram}>
                Palm Court,Gurugram
              </div>
              <div className={styles.viewLargerMap}>View larger map</div>
            </div>
          </div>
          <img
            className={styles.locationIcon}
            loading="lazy"
            alt=""
            src="/location-icon1@2x.png"
          />
        </div>
        <div className={styles.mapView}>
          <img
            className={styles.largeViewIcon}
            loading="lazy"
            alt=""
            src="/large-view1.svg"
          />
          <div className={styles.zoomOptions}>
            <div className={styles.zoomButtons}>
              <img
                className={styles.zoomInButton}
                alt=""
                src="/zoom-in-button1.svg"
              />
            </div>
            <img
              className={styles.zoomOptionsChild}
              alt=""
              src="/line-91.svg"
            />
            <div className={styles.zoomButtons}>
              <img
                className={styles.zoomInButton}
                alt=""
                src="/zoom-out-button.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
