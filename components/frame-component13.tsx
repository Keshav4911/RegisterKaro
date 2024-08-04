import type { NextPage } from "next";
import FirstPairContent from "./first-pair-content";
import ColumnPairs from "./column-pairs";
import styles from "./frame-component13.module.css";

export type FrameComponent13Type = {
  className?: string;
};

const FrameComponent13: NextPage<FrameComponent13Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.dualColumnOneWrapper, className].join(" ")}>
      <div className={styles.dualColumnOne}>
        <div className={styles.firstColumnPair}>
          <FirstPairContent
            group1000005742="/group-1000005742@2x.png"
            nullaLobortisNunc={`Professional Image & Enhanced Credibility`}
            interdumEtMalesuad="Elevate your company's image and attract top talent with a professional virtual address for websites, business cards, and marketing materials."
          />
          <FirstPairContent
            propGap="45px"
            group1000005742="/group-1000005743@2x.png"
            nullaLobortisNunc="Unmatched Work Flexibility"
            interdumEtMalesuad="Improve work-life balance by eliminating commutes and allowing flexible schedules."
          />
        </div>
        <div className={styles.columnPairsParent}>
          <ColumnPairs
            group1000005746="/group-1000005746.svg"
            nullaLobortisNunc="Streamlined Business Operations"
            interdumEtMalesuad="Access essential services like virtual assistants, answering services, and teleconferencing – all under one roof."
          />
          <ColumnPairs
            group1000005746="/group-1000005747@2x.png"
            nullaLobortisNunc={`Scalable & Cost-Effective Solution`}
            interdumEtMalesuad="Choose a virtual office plan that fits your needs and budget, with options for various locations and service levels."
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent13;
