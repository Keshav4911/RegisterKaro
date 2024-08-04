import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./benefit-list1.module.css";

export type BenefitList1Type = {
  className?: string;
  mailHandlingServices?: string;
  efficientManagementOfMail?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const BenefitList1: NextPage<BenefitList1Type> = ({
  className = "",
  propPadding,
  mailHandlingServices,
  efficientManagementOfMail,
}) => {
  const benefitListStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.benefitList, className].join(" ")}
      style={benefitListStyle}
    >
      <b className={styles.mailHandlingServicesContainer}>
        <ul className={styles.mailHandlingServices}>
          <li>{mailHandlingServices}</li>
        </ul>
      </b>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.efficientManagementOf}>
          {efficientManagementOfMail}
        </div>
      </div>
    </div>
  );
};

export default BenefitList1;
