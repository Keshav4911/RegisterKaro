import type { NextPage } from "next";
import styles from "./frame-component14.module.css";

export type FrameComponent14Type = {
  className?: string;
};

const FrameComponent14: NextPage<FrameComponent14Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.androidLarge4Wrapper, className].join(" ")}>
      <div className={styles.androidLarge4}>
        <div className={styles.testimonialHeader}>
          <h2 className={styles.clientTestimonial}>{`Client Testimonial `}</h2>
        </div>
        <div className={styles.testimonialSlider}>
          <div className={styles.ioarrowbacksharpWrapper}>
            <img
              className={styles.ioarrowbacksharpIcon}
              loading="lazy"
              alt=""
              src="/ioarrowbacksharp1.svg"
            />
          </div>
          <div className={styles.testimonialContent}>
            <div className={styles.testimonialQuote}>
              <div className={styles.quoteContent}>
                <img
                  className={styles.daburHealthcareCompanyDubaiIcon}
                  loading="lazy"
                  alt=""
                  src="/daburhealthcarecompanydubaiindia-1@2x.png"
                />
                <div className={styles.ioarrowbacksharpWrapper}>
                  <img
                    className={styles.ioarrowbacksharpIcon1}
                    loading="lazy"
                    alt=""
                    src="/ioarrowbacksharp-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.parent}>
              <h1 className={styles.h1}>“</h1>
              <div className={styles.theLaunchwiseTeamContainer}>
                <p className={styles.theLaunchwiseTeam}>
                  The LaunchWise team is very professional and 100% transparent.
                  We would surely recommend them to everyone who wants to have a
                  new business setup or those who already have a company. Their
                  experts are thorough with all corners of business. They have
                  surely earned us as their permanent client.
                </p>
              </div>
            </div>
            <div className={styles.author}>
              <div className={styles.authorDetails}>
                <div className={styles.authorDetailsChild} />
              </div>
              <div className={styles.sunilDuggalCeo}>
                 Sunil Duggal, CEO, Dabur Healthcare
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent14;
