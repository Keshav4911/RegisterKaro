import type { NextPage } from "next";
import styles from "./android-large2.module.css";

export type AndroidLarge2Type = {
  className?: string;
};

const AndroidLarge2: NextPage<AndroidLarge2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.androidLarge4, className].join(" ")}>
      <img
        className={styles.androidLarge4Child}
        loading="lazy"
        alt=""
        src="/group-1000005767@2x.png"
      />
      <div className={styles.row}>
        <div className={styles.cardItem}>
          <h2 className={styles.h3}>
            <p
              className={styles.subscribeForLatest}
            >{`Subscribe For Latest `}</p>
            <p className={styles.subscribeForLatest}>Newsletter</p>
          </h2>
          <div className={styles.emailInput}>
            <div className={styles.formControlInputStyle1}>
              <input
                className={styles.yourEmail}
                placeholder="Your Email"
                type="text"
              />
            </div>
            <button className={styles.btn}>
              <div className={styles.inputGroupText}>Subscribe</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AndroidLarge2;
