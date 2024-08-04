import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./first-pair-content.module.css";

export type FirstPairContentType = {
  className?: string;
  group1000005742?: string;
  nullaLobortisNunc?: string;
  interdumEtMalesuad?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
};

const FirstPairContent: NextPage<FirstPairContentType> = ({
  className = "",
  propGap,
  group1000005742,
  nullaLobortisNunc,
  interdumEtMalesuad,
}) => {
  const firstPairContentStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={[styles.firstPairContent, className].join(" ")}
      style={firstPairContentStyle}
    >
      <div className={styles.firstPairTop}>
        <img
          className={styles.firstPairTopChild}
          loading="lazy"
          alt=""
          src={group1000005742}
        />
        <div className={styles.nullaLobortisNunc}>{nullaLobortisNunc}</div>
      </div>
      <div className={styles.interdumEtMalesuad}>{interdumEtMalesuad}</div>
    </div>
  );
};

export default FirstPairContent;
