import type { NextPage } from "next";
import styles from "./frame-component8.module.css";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/rectangle-2161@2x.png"
      />
      <h2 className={styles.h1Headline7}>
        <p className={styles.workFromAnywhere}>{`Work From Anywhere, `}</p>
        <p className={styles.workFromAnywhere}>{`Grow Everywhere. `}</p>
        <p className={styles.workFromAnywhere}>
          Get Your Instant Virtual Office
        </p>
      </h2>
      <div className={styles.frameParent}>
        <div className={styles.supportingTextWrapper}>
          <div className={styles.supportingText}>
            <span>{`Submit your Details to get an Instant `}</span>
            <b className={styles.allInclusive}>All-inclusive</b>
            <span>{` Quote to your email and a `}</span>
            <b className={styles.allInclusive}>FREE</b>
            <span> Expert consultation</span>
          </div>
        </div>
        <div className={styles.nameInputWrapper}>
          <div className={styles.nameInput}>
            <div className={styles.label}>Name</div>
            <div className={styles.input}>
              <img className={styles.mailIcon} alt="" src="/mail.svg" />
              <input
                className={styles.text}
                placeholder="Your name"
                type="text"
              />
              <img className={styles.helpIcon} alt="" src="/help-icon7.svg" />
            </div>
          </div>
        </div>
        <div className={styles.nameInputWrapper}>
          <div className={styles.emailInput}>
            <div className={styles.emailInputBox}>
              <a className={styles.label1}>Mobile</a>
              <div className={styles.input1}>
                <img className={styles.mailIcon1} alt="" src="/mail1.svg" />
                <a className={styles.text1}>Mobile no.</a>
                <img
                  className={styles.helpIcon1}
                  alt=""
                  src="/help-icon8.svg"
                />
              </div>
            </div>
            <div className={styles.inputWithLabel}>
              <a className={styles.label2}>Email</a>
              <div className={styles.input2}>
                <input
                  className={styles.content}
                  placeholder="Email"
                  type="text"
                />
                <img className={styles.helpIcon} alt="" src="/help-icon9.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hintText}>This is a hint text to help user.</div>
        <div className={styles.hintText}>This is a hint text to help user.</div>
        <div className={styles.messageInput}>
          <div className={styles.inputWithLabel1}>
            <div className={styles.label3}>City</div>
            <div className={styles.input3}>
              <input
                className={styles.content}
                placeholder="City name"
                type="text"
              />
              <img className={styles.helpIcon} alt="" src="/help-icon10.svg" />
            </div>
          </div>
        </div>
        <div className={styles.hintText}>This is a hint text to help user.</div>
        <div className={styles.actionsWrapper}>
          <div className={styles.actions}>
            <div className={styles.button}>
              <div className={styles.buttonBase}>
                <b className={styles.text2}>Get a Detailed Quotation Now!</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hintText}>This is a hint text to help user.</div>
      </div>
    </div>
  );
};

export default FrameComponent8;
