import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./benefit-items1.module.css";

export type BenefitItems1Type = {
  className?: string;
  mailHandlingServices?: string;
  efficientManagementOfMail?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const BenefitItems1: NextPage<BenefitItems1Type> = ({
  className = "",
  propWidth,
  propAlignSelf,
  propWidth1,
  mailHandlingServices,
  efficientManagementOfMail,
  propMinWidth,
}) => {
  const benefitItems1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const mailHandlingServicesContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const efficientManagementOfStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={[styles.benefitItems, className].join(" ")}
      style={benefitItems1Style}
    >
      <h3
        className={styles.mailHandlingServicesContainer}
        style={mailHandlingServicesContainerStyle}
      >
        <span className={styles.mailHandlingServicesContainer1}>
          <ul className={styles.mailHandlingServices}>
            <li>{mailHandlingServices}</li>
          </ul>
        </span>
      </h3>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div
          className={styles.efficientManagementOf}
          style={efficientManagementOfStyle}
        >
          {efficientManagementOfMail}
        </div>
      </div>
    </div>
  );
};

export default BenefitItems1;
