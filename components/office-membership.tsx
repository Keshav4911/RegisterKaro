import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./office-membership.module.css";

export type OfficeMembershipType = {
  className?: string;
  newDelhi?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const OfficeMembership: NextPage<OfficeMembershipType> = ({
  className = "",
  newDelhi,
  propMinWidth,
}) => {
  const newDelhi1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.officeMembership, className].join(" ")}>
      <div className={styles.officeMembershipHeading} />
      <div className={styles.officeMembershipDescription}>
        <div className={styles.newDelhi} style={newDelhi1Style}>
          {newDelhi}
        </div>
      </div>
    </div>
  );
};

export default OfficeMembership;
