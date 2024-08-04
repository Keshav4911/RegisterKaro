import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./feature-item.module.css";

export type FeatureItemType = {
  className?: string;
  androidCheckmarkCircle?: string;
  nullaLobortisNunc?: string;
  interdumEtMalesuad?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const FeatureItem: NextPage<FeatureItemType> = ({
  className = "",
  propMinWidth,
  propBackgroundColor,
  androidCheckmarkCircle,
  nullaLobortisNunc,
  interdumEtMalesuad,
}) => {
  const featureItemStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const checkBackgroundStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={[styles.featureItem, className].join(" ")}
      style={featureItemStyle}
    >
      <div className={styles.checkItem}>
        <div className={styles.checkIcon}>
          <div className={styles.checkMark}>
            <div
              className={styles.checkBackground}
              style={checkBackgroundStyle}
            />
            <img
              className={styles.androidCheckmarkCircleIcon}
              loading="lazy"
              alt=""
              src={androidCheckmarkCircle}
            />
          </div>
        </div>
        <div className={styles.nullaLobortisNunc}>{nullaLobortisNunc}</div>
      </div>
      <div className={styles.interdumEtMalesuad}>{interdumEtMalesuad}</div>
    </div>
  );
};

export default FeatureItem;
