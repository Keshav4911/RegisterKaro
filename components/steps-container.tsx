import type { NextPage } from "next";
import styles from "./steps-container.module.css";

export type StepsContainerType = {
  className?: string;
};

const StepsContainer: NextPage<StepsContainerType> = ({ className = "" }) => {
  return (
    <div className={[styles.stepsContainer, className].join(" ")}>
      <div className={styles.stepsContent}>
        <h1 className={styles.getYourVirtualContainer}>
          <span className={styles.getYourVirtual}>
            Get Your Virtual Office Up and Running in
          </span>
          <b> 3 Easy Steps!</b>
        </h1>
      </div>
      <div className={styles.stepsGraphic}>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
        <img
          className={styles.maskGroupIcon1}
          loading="lazy"
          alt=""
          src="/mask-group-1@2x.png"
        />
        <img className={styles.maskGroupIcon2} alt="" src="/mask-group-2.svg" />
        <img
          className={styles.maskGroupIcon3}
          loading="lazy"
          alt=""
          src="/mask-group-3@2x.png"
        />
        <div className={styles.stepOneContainer}>
          <div className={styles.stepOneContainerChild} />
          <div className={styles.stepOneContent}>
            <h3 className={styles.procedureToObtain}>
              Procedure to obtain Virtual office address.
            </h3>
          </div>
          <div className={styles.stepTwoContainer}>
            <div className={styles.stepTwoContentOne}>
              <div className={styles.stepTwoContentTwo}>
                <div className={styles.stepTwoContentThree}>
                  <div className={styles.stepTwoGraphic}>
                    <div className={styles.stepTwoGraphicInner}>
                      <img
                        className={styles.frameChild}
                        alt=""
                        src="/rectangle-486.svg"
                      />
                    </div>
                    <div className={styles.stepTwoGraphicChild}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/ellipse-79.svg"
                      />
                    </div>
                    <div className={styles.maskContainer}>
                      <div className={styles.maskWrapper}>
                        <img
                          className={styles.maskWrapperChild}
                          alt=""
                          src="/rectangle-486.svg"
                        />
                        <img
                          className={styles.maskGroupIcon4}
                          loading="lazy"
                          alt=""
                          src="/mask-group-4@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.frameDiv}>
                      <img
                        className={styles.frameItem}
                        loading="lazy"
                        alt=""
                        src="/ellipse-81.svg"
                      />
                    </div>
                    <img
                      className={styles.stepTwoGraphicItem}
                      alt=""
                      src="/rectangle-486.svg"
                    />
                  </div>
                </div>
                <div className={styles.stepThreeContainerParent}>
                  <div className={styles.stepThreeContainer}>
                    <b className={styles.connectWithRegisterkaroContainer}>
                      <p className={styles.connectWith}>{`Connect With `}</p>
                      <p className={styles.connectWith}>RegisterKaro</p>
                    </b>
                  </div>
                  <b className={styles.giveEssentialDetailsContainer}>
                    <p
                      className={styles.connectWith}
                    >{`Give Essential Details `}</p>
                    <p className={styles.connectWith}>{`& Documents`}</p>
                  </b>
                  <b className={styles.getYourVirtualContainer1}>
                    <p
                      className={styles.connectWith}
                    >{`Get Your Virtual Office `}</p>
                    <p className={styles.connectWith}>Ready To Work</p>
                  </b>
                </div>
              </div>
            </div>
            <div className={styles.stepFourContainer}>
              <div className={styles.reachOutTo}>
                Reach out to our friendly customer support team through chat,
                email, or phone. They'll guide you through the process.
              </div>
              <div className={styles.reachOutTo}>
                Upload essential documents required for registration, following
                our clear and secure guidelines.
              </div>
              <div className={styles.onceYourApplicationContainer}>
                <p className={styles.connectWith}>
                  Once your application is approved, your virtual office is
                  activated instantly!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsContainer;
