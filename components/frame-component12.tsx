import type { NextPage } from "next";
import styles from "./frame-component12.module.css";

export type FrameComponent12Type = {
  className?: string;
};

const FrameComponent12: NextPage<FrameComponent12Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.androidLarge4Wrapper, className].join(" ")}>
      <div className={styles.androidLarge4}>
        <div className={styles.getYourVirtualOfficeUpAndWrapper}>
          <h3 className={styles.getYourVirtualContainer}>
            <span className={styles.getYourVirtual}>
              Get Your Virtual Office Up and Running in
            </span>
            <b> 3 Easy Steps!</b>
          </h3>
        </div>
        <div className={styles.procedureToObtainVirtualOfParent}>
          <div className={styles.procedureToObtain}>
            Procedure to obtain Virtual office address.
          </div>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-1000005735@2x.png"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/ellipse-811.svg"
            />
          </div>
          <div className={styles.uploadEssentialDocumentsReqParent}>
            <div className={styles.uploadEssentialDocuments}>
              Upload essential documents required for registration, following
              our clear and secure guidelines.
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent1}>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.reachOutToOurFriendlyCustParent}>
                          <div className={styles.reachOutTo}>
                            Reach out to our friendly customer support team
                            through chat, email, or phone. They'll guide you
                            through the process.
                          </div>
                          <div className={styles.connectWithRegisterkaroParent}>
                            <b
                              className={
                                styles.connectWithRegisterkaroContainer
                              }
                            >
                              <p
                                className={styles.connectWith}
                              >{`Connect With `}</p>
                              <p className={styles.connectWith}>RegisterKaro</p>
                            </b>
                            <div className={styles.frameWrapper2}>
                              <img
                                className={styles.frameInner}
                                loading="lazy"
                                alt=""
                                src="/group-1000005738@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.ellipseIcon}
                        loading="lazy"
                        alt=""
                        src="/ellipse-791.svg"
                      />
                    </div>
                  </div>
                  <b className={styles.giveEssentialDetailsContainer}>
                    <p
                      className={styles.connectWith}
                    >{`Give Essential Details `}</p>
                    <p className={styles.connectWith}>{`& Documents`}</p>
                  </b>
                </div>
              </div>
              <div className={styles.readyToWorkBlock}>
                <div className={styles.readyToWorkContent}>
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/group-1000005740@2x.png"
                  />
                </div>
                <b className={styles.connectWithRegisterkaroContainer}>
                  <p
                    className={styles.connectWith}
                  >{`Get Your Virtual Office `}</p>
                  <p className={styles.connectWith}>Ready To Work</p>
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.approvedApplication}>
          <div className={styles.onceYourApplicationContainer}>
            <p className={styles.connectWith}>
              Once your application is approved, your virtual office is
              activated instantly!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
