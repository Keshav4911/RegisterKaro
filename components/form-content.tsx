import type { NextPage } from "next";
import styles from "./form-content.module.css";

export type FormContentType = {
  className?: string;
};

const FormContent: NextPage<FormContentType> = ({ className = "" }) => {
  return (
    <div className={[styles.formContent, className].join(" ")}>
      <div className={styles.formFields}>
        <div className={styles.description}>
          <div className={styles.header}>
            <b className={styles.heading}>Get in touch with us</b>
          </div>
          <div className={styles.supportingText}>
            <span>{`Submit your Details to get an Instant `}</span>
            <b className={styles.allInclusive}>All-inclusive</b>
            <span>{` Quote to your email and a `}</span>
            <b className={styles.allInclusive}>FREE</b>
            <span> Expert consultation</span>
          </div>
        </div>
        <div className={styles.inputFieldWrapper}>
          <div className={styles.inputField}>
            <div className={styles.label}>Name</div>
            <div className={styles.input}>
              <img className={styles.mailIcon} alt="" src="/mail2.svg" />
              <input
                className={styles.text}
                placeholder="Your name"
                type="text"
              />
              <img className={styles.helpIcon} alt="" src="/help-icon11.svg" />
            </div>
          </div>
        </div>
        <div className={styles.hintText}>This is a hint text to help user.</div>
        <div className={styles.inputFieldWrapper}>
          <div className={styles.inputField}>
            <a className={styles.label1}>Mobile</a>
            <div className={styles.input}>
              <img className={styles.mailIcon1} alt="" src="/mail3.svg" />
              <input
                className={styles.text}
                placeholder="Mobile no."
                type="text"
              />
              <img className={styles.helpIcon1} alt="" src="/help-icon12.svg" />
            </div>
          </div>
        </div>
        <div className={styles.hintText}>This is a hint text to help user.</div>
        <div className={styles.inputFieldWrapper}>
          <div className={styles.labelGroup}>
            <div className={styles.label2}>Email</div>
            <div className={styles.input}>
              <img className={styles.mailIcon} alt="" src="/mail3.svg" />
              <input className={styles.text2} placeholder="Email" type="text" />
              <img className={styles.helpIcon} alt="" src="/help-icon12.svg" />
            </div>
          </div>
        </div>
        <div className={styles.hintText}>This is a hint text to help user.</div>
        <div className={styles.dropdownInput}>
          <div className={styles.inputWithLabel}>
            <div className={styles.label3}>City</div>
            <div className={styles.input3}>
              <input
                className={styles.content}
                placeholder="City name"
                type="text"
              />
              <img className={styles.helpIcon3} alt="" src="/help-icon13.svg" />
            </div>
          </div>
        </div>
        <div className={styles.hintText}>This is a hint text to help user.</div>
        <div className={styles.actionButton}>
          <div className={styles.actions}>
            <div className={styles.button}>
              <div className={styles.buttonBase}>
                <b className={styles.text3}>Get a Detailed Quotation Now!</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContent;
