import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./divswiper-slide.module.css";

export type DivswiperSlideType = {
  className?: string;
  pictureOfficeSpaceCardSta?: string;
  heading2PrivateOffices?: string;
  aRangeOfReadyToUseFullyEq?: string;
  officesWithEverythingYouN?: string;
  started?: string;
  calendarsvg?: string;
  byMonthOrYear?: string;
  from89PerPersonPerMonth?: string;
  getAQuote?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propHeight1?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propFlex1?: CSSProperties["flex"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const DivswiperSlide: NextPage<DivswiperSlideType> = ({
  className = "",
  pictureOfficeSpaceCardSta,
  propAlignSelf,
  propFlex,
  heading2PrivateOffices,
  propDisplay,
  propMinWidth,
  propWidth,
  propAlignSelf1,
  aRangeOfReadyToUseFullyEq,
  officesWithEverythingYouN,
  started,
  propHeight,
  calendarsvg,
  byMonthOrYear,
  propDisplay1,
  propMinWidth1,
  propHeight1,
  propWidth1,
  from89PerPersonPerMonth,
  propFlex1,
  getAQuote,
  propMinWidth2,
}) => {
  const kartikStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const clientTestimonialsHeadingStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const heading21Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propDisplay, propMinWidth, propWidth]);

  const aRangeOfContainerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const planIconsStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const byMonthOr1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  const teamsIconsStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const pricingStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const from89Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const getAQuote1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={[styles.divswiperSlide, className].join(" ")}>
      <img
        className={styles.pictureOfficeSpaceCardSt}
        loading="lazy"
        alt=""
        src={pictureOfficeSpaceCardSta}
      />
      <div className={styles.kartik} style={kartikStyle}>
        <div
          className={styles.clientTestimonialsHeading}
          style={clientTestimonialsHeadingStyle}
        >
          <div className={styles.heading2} style={heading21Style}>
            {heading2PrivateOffices}
          </div>
          <div
            className={styles.aRangeOfContainer}
            style={aRangeOfContainerStyle}
          >
            <p className={styles.aRangeOf}>{aRangeOfReadyToUseFullyEq}</p>
            <p className={styles.aRangeOf}>{officesWithEverythingYouN}</p>
            <p className={styles.aRangeOf}>{started}</p>
          </div>
        </div>
      </div>
      <div className={styles.officePlans}>
        <div className={styles.planOptions}>
          <div className={styles.planDetails}>
            <div className={styles.planIcons} style={planIconsStyle}>
              <img
                className={styles.calendarsvgIcon}
                alt=""
                src={calendarsvg}
              />
            </div>
            <div className={styles.byMonthOr} style={byMonthOr1Style}>
              {byMonthOrYear}
            </div>
          </div>
          <div className={styles.planDetails}>
            <div className={styles.planIcons} style={teamsIconsStyle}>
              <img
                className={styles.teamssvgIcon}
                alt=""
                src="/teamssvg1@2x.png"
              />
            </div>
            <div className={styles.teamsOfAny}>Teams of any size</div>
          </div>
        </div>
      </div>
      <div className={styles.pricing} style={pricingStyle}>
        <div className={styles.from89} style={from89Style}>
          {from89PerPersonPerMonth}
        </div>
      </div>
      <div className={styles.planButtons}>
        <div className={styles.actionButtons}>
          <button className={styles.link}>
            <div className={styles.getAQuote} style={getAQuote1Style}>
              {getAQuote}
            </div>
          </button>
          <button className={styles.link1}>
            <a className={styles.learnMore}>Learn more</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DivswiperSlide;
