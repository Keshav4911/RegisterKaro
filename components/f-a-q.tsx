import type { NextPage } from "next";
import FAQBlocks from "./f-a-q-blocks";
import styles from "./f-a-q.module.css";

export type FAQType = {
  className?: string;
};

const FAQ: NextPage<FAQType> = ({ className = "" }) => {
  return (
    <section className={[styles.fAQ, className].join(" ")}>
      <div className={styles.fAQContent}>
        <div className={styles.readFAQ}>
          <div className={styles.fAQLink}>
            <h2 className={styles.questionsInMind}>Questions in mind?</h2>
            <div className={styles.readLink}>
              <div className={styles.readOurFaq}>Read our FAQ</div>
            </div>
          </div>
        </div>
        <div className={styles.fAQContentInner}>
          <div className={styles.lineParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameChild} />
          </div>
        </div>
        <FAQBlocks howCanAVirtualOfficeBenef="How can a virtual office benefit my business in India?" />
        <FAQBlocks howCanAVirtualOfficeBenef="Can I legally register my business using a virtual office address in India?" />
        <FAQBlocks howCanAVirtualOfficeBenef="How will I receive my business mail and packages with a virtual office?" />
        <div className={styles.officialAddress}>
          <textarea
            className={styles.addressContent}
            placeholder="Can I use a virtual office address for official correspondence and marketing materials?"
            rows={4}
            cols={16}
          />
        </div>
        <textarea
          className={styles.fAQBlocks}
          placeholder="Do virtual office services in India include call answering and forwarding?"
          rows={4}
          cols={16}
        />
      </div>
    </section>
  );
};

export default FAQ;
