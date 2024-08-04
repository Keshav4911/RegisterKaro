import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./benefit-list.module.css";

export type BenefitListType = {
  className?: string;
  prestigiousBusinessAddres?: string;
  accessToPrestigiousBusine?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const BenefitList: NextPage<BenefitListType> = ({
  className = "",
  propWidth,
  prestigiousBusinessAddres,
  accessToPrestigiousBusine,
}) => {
  const prestigiousBusinessAddressesContainerStyle: CSSProperties =
    useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

  return (
    <div className={[styles.benefitList, className].join(" ")}>
      <b
        className={styles.prestigiousBusinessAddressesContainer}
        style={prestigiousBusinessAddressesContainerStyle}
      >
        <span className={styles.prestigiousBusinessAddressesContainer1}>
          <ul className={styles.prestigiousBusinessAddresses}>
            <li>{prestigiousBusinessAddres}</li>
          </ul>
        </span>
      </b>
      <div className={styles.benefitIllustrations}>
        <div className={styles.benefitIcons} />
        <div className={styles.accessToPrestigious}>
          {accessToPrestigiousBusine}
        </div>
      </div>
    </div>
  );
};

export default BenefitList;
