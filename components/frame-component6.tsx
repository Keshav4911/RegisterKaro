import type { NextPage } from "next";
import styles from "./frame-component6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.mapTitle}>
          <h1 className={styles.clientTestimonial}>{`Client Testimonial `}</h1>
        </div>
        <div className={styles.mapDetails}>
          <div className={styles.mapView}>
            <div className={styles.zoomControls}>
              <div className={styles.zoomIn} />
              <img
                className={styles.ioarrowbacksharpIcon}
                loading="lazy"
                alt=""
                src="/ioarrowbacksharp.svg"
              />
            </div>
          </div>
          <div className={styles.zoomOut}>
            <img
              className={styles.daburHealthcareCompanyDubaiIcon}
              loading="lazy"
              alt=""
              src="/daburhealthcarecompanydubaiindia-1@2x.png"
            />
          </div>
          <div className={styles.viewButton}>
            <div className={styles.mapBackground}>
              <div className={styles.footerContent}>
                <div className={styles.div}>“</div>
                <div className={styles.theLaunchwiseTeamContainer}>
                  <p className={styles.theLaunchwiseTeam}>
                    The LaunchWise team is very professional and 100%
                    transparent. We would surely recommend them to everyone who
                    wants to have a new business setup or those who already have
                    a company. Their experts are thorough with all corners of
                    business. They have surely earned us as their permanent
                    client.
                  </p>
                </div>
              </div>
              <div className={styles.contactDetailsParent}>
                <div className={styles.contactDetails}>
                  <div className={styles.socialLinks} />
                </div>
                <div className={styles.sunilDuggalCeo}>
                   Sunil Duggal, CEO, Dabur Healthcare
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mapView1}>
            <img
              className={styles.mapViewChild}
              loading="lazy"
              alt=""
              src="/frame-1000005733@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
