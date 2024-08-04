import type { NextPage } from "next";
import styles from "./office-space-description.module.css";

export type OfficeSpaceDescriptionType = {
  className?: string;
};

const OfficeSpaceDescription: NextPage<OfficeSpaceDescriptionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.officeSpaceDescription, className].join(" ")}>
      <div className={styles.officeSpaceDescriptionChild} />
      <div className={styles.choiceDescription}>
        <div className={styles.fromASingle}>
          From a single desk to a whole building. The choice is yours.
        </div>
      </div>
      <div className={styles.workspaceSolution}>
        <h1 className={styles.discoverTheUltimate}>
          Discover the Ultimate Workspace Solution
        </h1>
        <div className={styles.wrapper}>
          <div className={styles.div}>.</div>
        </div>
      </div>
    </div>
  );
};

export default OfficeSpaceDescription;
