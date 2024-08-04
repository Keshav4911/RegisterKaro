import type { NextPage } from "next";
import styles from "./navigation3.module.css";

export type Navigation3Type = {
  className?: string;
};

const Navigation3: NextPage<Navigation3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.navigation, className].join(" ")}>
      <div className={styles.headerLogo884459461Parent}>
        <img
          className={styles.headerLogo884459461Icon}
          loading="lazy"
          alt=""
          src="/headerlogo88445946-11.svg"
        />
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-48095450.svg"
        />
      </div>
      <div className={styles.navbarItems}>
        <a className={styles.workspaceServices}>{`Workspace & Services`}</a>
      </div>
      <div className={styles.navbarItems1}>
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
      </div>
      <div className={styles.navbarItems2}>
        <a className={styles.getStarted}>Get started</a>
      </div>
      <div className={styles.navbarItems3}>
        <a className={styles.workspaceServices}>More</a>
      </div>
      <div className={styles.navbarItems4}>
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame-1.svg"
        />
      </div>
      <div className={styles.navbarItems5}>
        <a className={styles.help}>Help</a>
      </div>
      <div className={styles.link}>
        <a className={styles.enquireNow}>ENQUIRE NOW</a>
      </div>
      <div className={styles.buttonContactUs} />
      <div className={styles.buttonProfile} />
    </div>
  );
};

export default Navigation3;
