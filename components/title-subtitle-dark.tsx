import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./title-subtitle-dark.module.css";

export type TitleSubtitleDarkType = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propMargin?: CSSProperties["margin"];
  propHeight?: CSSProperties["height"];
  propFontWeight?: CSSProperties["fontWeight"];
};

const TitleSubtitleDark: NextPage<TitleSubtitleDarkType> = ({
  className = "",
  propFlex,
  propAlignSelf,
  propPadding,
  propMargin,
  propHeight,
  propFontWeight,
}) => {
  const titleSubtitleDarkStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propFlex, propAlignSelf, propPadding]);

  const nullaLobortisNuncStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
      height: propHeight,
      fontWeight: propFontWeight,
    };
  }, [propMargin, propHeight, propFontWeight]);

  return (
    <div
      className={[styles.titlesubtitleDark, className].join(" ")}
      style={titleSubtitleDarkStyle}
    >
      <div className={styles.text}>
        <b className={styles.nullaLobortisNunc} style={nullaLobortisNuncStyle}>
          Accessible. Affordable. Adaptable
        </b>
      </div>
    </div>
  );
};

export default TitleSubtitleDark;
