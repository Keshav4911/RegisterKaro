import type { NextPage } from "next";
import styles from "./footer2.module.css";

export type Footer2Type = {
  className?: string;
};

const Footer2: NextPage<Footer2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <img
          className={styles.headerLogo884459461Icon}
          loading="lazy"
          alt=""
          src="/headerlogo88445946-1-11.svg"
        />
        <div className={styles.footerInfo}>
          <div className={styles.feelFreeToConnectWithUsParent}>
            <div className={styles.feelFreeTo}>
              Feel free to connect with us
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactDetails}>
                <div className={styles.contactItems}>
                  <img
                    className={styles.emailIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-22.svg"
                  />
                  <div className={styles.officeEmail}>+91 93112 21210</div>
                </div>
                <div className={styles.contactItems}>
                  <img
                    className={styles.emailIcon}
                    loading="lazy"
                    alt=""
                    src="/email-12.svg"
                  />
                  <div className={styles.virtualofficeteamcowork}>
                    virtualoffice@teamco.work
                  </div>
                </div>
              </div>
              <div className={styles.navigation21Parent}>
                <img
                  className={styles.emailIcon}
                  loading="lazy"
                  alt=""
                  src="/navigation2-13.svg"
                />
                <div className={styles.palmCourtMehrauliGurgaon}>
                  704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana,
                  122007
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <img
            className={styles.linkFacebook}
            loading="lazy"
            alt=""
            src="/link--facebook2.svg"
          />
          <img
            className={styles.linkFacebook}
            loading="lazy"
            alt=""
            src="/link--instagram2.svg"
          />
          <img
            className={styles.linkFacebook}
            loading="lazy"
            alt=""
            src="/link--linkedin2.svg"
          />
          <img
            className={styles.linkTwitter}
            loading="lazy"
            alt=""
            src="/link--twitter2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer2;
