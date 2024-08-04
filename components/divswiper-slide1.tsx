import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./divswiper-slide1.module.css";

export type DivswiperSlide1Type = {
  className?: string;
  heading2PrivateOffices?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propHeight?: CSSProperties["height"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propHeight1?: CSSProperties["height"];
  propDisplay2?: CSSProperties["display"];
  propMinWidth2?: CSSProperties["minWidth"];
  propDisplay3?: CSSProperties["display"];
  propMinWidth3?: CSSProperties["minWidth"];
  propDisplay4?: CSSProperties["display"];
  propMinWidth4?: CSSProperties["minWidth"];
};

const DivswiperSlide1: NextPage<DivswiperSlide1Type> = ({
  className = "",
  heading2PrivateOffices,
  propDisplay,
  propMinWidth,
  propHeight,
  propDisplay1,
  propMinWidth1,
  propHeight1,
  propDisplay2,
  propMinWidth2,
  propDisplay3,
  propMinWidth3,
  propDisplay4,
  propMinWidth4,
}) => {
  const heading2Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const durationIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const byMonthOrStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  const teamIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const teamsOfAnyStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay2,
      minWidth: propMinWidth2,
    };
  }, [propDisplay2, propMinWidth2]);

  const getAQuoteStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay3,
      minWidth: propMinWidth3,
    };
  }, [propDisplay3, propMinWidth3]);

  const learnMoreStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay4,
      minWidth: propMinWidth4,
    };
  }, [propDisplay4, propMinWidth4]);

  return (
    <div className={[styles.divswiperSlide, className].join(" ")}>
      <div className={styles.privateOfficeHeadings}>
        <b className={styles.heading2} style={heading2Style}>
          {heading2PrivateOffices}
        </b>
        <div className={styles.aRangeOf}>
          A range of ready-to-use, fully equipped offices with everything you
          need to get started.
        </div>
      </div>
      <div className={styles.privateOfficesRental}>
        <div className={styles.rentalDuration}>
          <div className={styles.durationIcon} style={durationIconStyle}>
            <img
              className={styles.calendarsvgIcon}
              alt=""
              src="/calendarsvg.svg"
            />
          </div>
          <div className={styles.byMonthOr} style={byMonthOrStyle}>
            By month or year
          </div>
        </div>
        <div className={styles.rentalDuration}>
          <div className={styles.durationIcon} style={teamIconStyle}>
            <img
              className={styles.teamssvgIcon}
              alt=""
              src="/teamssvg@2x.png"
            />
          </div>
          <div className={styles.teamsOfAny} style={teamsOfAnyStyle}>
            Teams of any size
          </div>
        </div>
      </div>
      <div className={styles.from89}>From $ 89 per person per month</div>
      <div className={styles.privateOfficeActions}>
        <button className={styles.link}>
          <div className={styles.getAQuote} style={getAQuoteStyle}>
            Get a quote
          </div>
        </button>
        <button className={styles.link1}>
          <a className={styles.learnMore} style={learnMoreStyle}>
            Learn more
          </a>
        </button>
      </div>
    </div>
  );
};

export default DivswiperSlide1;
