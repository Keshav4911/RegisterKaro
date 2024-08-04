import type { NextPage } from "next";
import styles from "./f-a-q-blocks.module.css";

export type FAQBlocksType = {
  className?: string;
  howCanAVirtualOfficeBenef?: string;
};

const FAQBlocks: NextPage<FAQBlocksType> = ({
  className = "",
  howCanAVirtualOfficeBenef,
}) => {
  return (
    <div className={[styles.fAQBlocks, className].join(" ")}>
      <div className={styles.fAQItems}>
        <div className={styles.howCanA}>{howCanAVirtualOfficeBenef}</div>
        <img className={styles.fAQItemsChild} alt="" src="/group-35622.svg" />
      </div>
    </div>
  );
};

export default FAQBlocks;
