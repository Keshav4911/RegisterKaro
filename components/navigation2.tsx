import type { NextPage } from "next";
import styles from "./navigation2.module.css";

export type Navigation2Type = {
  className?: string;
};

const Navigation2: NextPage<Navigation2Type> = ({ className = "" }) => {
  return (
    <header className={[styles.navigation, className].join(" ")}>
      <div className={styles.headerRight}>
        <img
          className={styles.headerLogo884459461Icon}
          loading="lazy"
          alt=""
          src="/headerlogo88445946-1.svg"
        />
        <img
          className={styles.buttonContactUs}
          alt=""
          src="/button--contact-us.svg"
        />
      </div>
      <div className={styles.profileButtonContainer}>
        <img
          className={styles.buttonProfile}
          alt=""
          src="/button--profile.svg"
        />
      </div>
      <div className={styles.navigationInner}>
        <img className={styles.frameChild} alt="" src="/group-48095450.svg" />
      </div>
      <div className={styles.navigationLinks}>
        <a className={styles.workspaceServices}>{`Workspace & Services`}</a>
      </div>
      <div className={styles.navigationLinks1}>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
      </div>
      <div className={styles.navigationChild}>
        <div className={styles.getStartedParent}>
          <a className={styles.getStarted}>Get started</a>
          <a className={styles.more}>More</a>
        </div>
      </div>
      <div className={styles.navigationLinks2}>
        <img className={styles.frameIcon} alt="" src="/frame-1.svg" />
      </div>
      <div className={styles.navigationLinks3}>
        <a className={styles.help}>Help</a>
      </div>
      <div className={styles.link}>
        <a className={styles.enquireNow}>ENQUIRE NOW</a>
      </div>
    </header>
  );
};

export default Navigation2;
