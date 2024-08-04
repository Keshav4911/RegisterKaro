import type { NextPage } from "next";
import OfficeMembership from "./office-membership";
import styles from "./office-image.module.css";

export type OfficeImageType = {
  className?: string;
};

const OfficeImage: NextPage<OfficeImageType> = ({ className = "" }) => {
  return (
    <div className={[styles.officeImage, className].join(" ")}>
      <div className={styles.privateOffices}>
        <b className={styles.trendingCities}>Trending cities</b>
        <div className={styles.dayOffices}>
          <OfficeMembership newDelhi="New Delhi" />
          <OfficeMembership newDelhi="Noida" propMinWidth="36px" />
          <OfficeMembership newDelhi="Bangalore" propMinWidth="61px" />
          <OfficeMembership newDelhi="Mumbai" propMinWidth="49px" />
          <OfficeMembership newDelhi="Hyderabad" propMinWidth="66px" />
          <OfficeMembership newDelhi="Chennai" propMinWidth="50px" />
        </div>
      </div>
    </div>
  );
};

export default OfficeImage;
