import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./benefit-items.module.css";

export type BenefitItemsType = {
  className?: string;
  prestigiousBusinessAddres?: string;
  accessToPrestigiousBusine?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const BenefitItems: NextPage<BenefitItemsType> = ({
  className = "",
  propWidth,
  propAlignSelf,
  prestigiousBusinessAddres,
  propWidth1,
  accessToPrestigiousBusine,
  propDisplay,
  propMinWidth,
}) => {
  const benefitItemsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const benefitDetailsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const accessToPrestigiousStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={[styles.benefitItems, className].join(" ")}
      style={benefitItemsStyle}
    >
      <h3 className={styles.prestigiousBusinessAddressesContainer}>
        <ul className={styles.prestigiousBusinessAddresses}>
          <li>{prestigiousBusinessAddres}</li>
        </ul>
      </h3>
      <div className={styles.benefitDetails} style={benefitDetailsStyle}>
        <div className={styles.detailsShapes} />
        <div
          className={styles.accessToPrestigious}
          style={accessToPrestigiousStyle}
        >
          {accessToPrestigiousBusine}
        </div>
      </div>
    </div>
  );
};

export default BenefitItems;
