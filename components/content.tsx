import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./content.module.css";

export type ContentType = {
  className?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Content: NextPage<ContentType> = ({
  className = "",
  propWidth,
  propAlignSelf,
  propMinWidth,
}) => {
  const contentStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const emailSubscriptionStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.content, className].join(" ")} style={contentStyle}>
      <div className={styles.joinTheNewsletter}>Join the newsletter</div>
      <div className={styles.form}>
        <input
          className={styles.emailSubscription}
          placeholder="Enter your email"
          type="text"
          style={emailSubscriptionStyle}
        />
        <button className={styles.emailSubscription1}>
          <b className={styles.subscribe}>Subscribe</b>
        </button>
      </div>
    </div>
  );
};

export default Content;
