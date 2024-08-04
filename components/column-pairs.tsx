import type { NextPage } from "next";
import styles from "./column-pairs.module.css";

export type ColumnPairsType = {
  className?: string;
  group1000005746?: string;
  nullaLobortisNunc?: string;
  interdumEtMalesuad?: string;
};

const ColumnPairs: NextPage<ColumnPairsType> = ({
  className = "",
  group1000005746,
  nullaLobortisNunc,
  interdumEtMalesuad,
}) => {
  return (
    <div className={[styles.columnPairs, className].join(" ")}>
      <div className={styles.firstTwoPairs}>
        <div className={styles.titlePairs}>
          <img
            className={styles.titlePairsChild}
            loading="lazy"
            alt=""
            src={group1000005746}
          />
          <div className={styles.nullaLobortisNunc}>{nullaLobortisNunc}</div>
        </div>
      </div>
      <div className={styles.interdumEtMalesuad}>{interdumEtMalesuad}</div>
    </div>
  );
};

export default ColumnPairs;
