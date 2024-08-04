import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./f-a-q-list.module.css";

export type FAQListType = {
  className?: string;
  howCanAVirtualOfficeBenef?: string;
  group35622?: string;

  /** Style props */
  propTextDecoration?: CSSProperties["textDecoration"];
  propPadding?: CSSProperties["padding"];
};

const FAQList: NextPage<FAQListType> = ({
  className = "",
  howCanAVirtualOfficeBenef,
  propTextDecoration,
  propPadding,
  group35622,
}) => {
  const howCanAStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const fAQAnswersStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={[styles.fAQList, className].join(" ")}>
      <a className={styles.howCanA} style={howCanAStyle}>
        {howCanAVirtualOfficeBenef}
      </a>
      <div className={styles.fAQAnswers} style={fAQAnswersStyle}>
        <img className={styles.fAQAnswersChild} alt="" src={group35622} />
      </div>
    </div>
  );
};

export default FAQList;
