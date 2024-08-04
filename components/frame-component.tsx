import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  newDelhi?: string;
  noida?: string;
  bangalore?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
  propTextDecoration1?: CSSProperties["textDecoration"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  newDelhi,
  propMinWidth,
  propTextDecoration,
  noida,
  propMinWidth1,
  bangalore,
  propMinWidth2,
  propTextDecoration1,
}) => {
  const newDelhiStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      textDecoration: propTextDecoration,
    };
  }, [propMinWidth, propTextDecoration]);

  const noidaStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const bangaloreStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
      textDecoration: propTextDecoration1,
    };
  }, [propMinWidth2, propTextDecoration1]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <div className={styles.cityNamesContainer}>
        <div className={styles.rectangleParent}>
          <div className={styles.newDelhi} style={newDelhiStyle}>
            {newDelhi}
          </div>
          <div className={styles.noida} style={noidaStyle}>
            {noida}
          </div>
          <div className={styles.bangalore} style={bangaloreStyle}>
            {bangalore}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
