import type { NextPage } from "next";
import styles from "./container.module.css";

export type ContainerType = {
  className?: string;
};

const Container: NextPage<ContainerType> = ({ className = "" }) => {
  return (
    <section className={[styles.container, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.statsWrapper}>
          <div className={styles.stats}>
            <div className={styles.dividerParent}>
              <img
                className={styles.dividerIcon}
                loading="lazy"
                alt=""
                src="/rectangle-131@2x.png"
              />
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.statsItems}>
                  <div className={styles.statsItem}>
                    <div className={styles.statsData}>
                      <div className={styles.statsNumber}>10,000+</div>
                      <div className={styles.statsLabel}>
                        <div className={styles.clientsServed}>
                          Clients Served
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.statsData}>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>200+</div>
                    </div>
                    <div className={styles.statsItem2}>
                      <div className={styles.locationsAcrossIndia}>
                        Locations Across India
                      </div>
                    </div>
                  </div>
                  <div className={styles.statsItem3}>
                    <div className={styles.statsData}>
                      <div className={styles.statsNumber1}>
                        <div className={styles.count}>150+</div>
                      </div>
                      <div className={styles.statsItem2}>
                        <div className={styles.consultants}>Consultants</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.statsData}>
                      <div className={styles.div}>500+</div>
                      <div className={styles.partnersWrapper}>
                        <a className={styles.partners}>Partners</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.content1}>
                <div className={styles.whyOptForLaunchwiseParent}>
                  <h1 className={styles.whyOptFor}>Why Opt for Launchwise?</h1>
                  <div className={styles.delegateWorkspaceCustomizati}>
                    Delegate workspace customization and management to us,
                    allowing you to concentrate on your core business activities
                    while we ensure your workspace is primed for growth.
                  </div>
                </div>
                <div className={styles.imageParent}>
                  <div className={styles.image}>
                    <div className={styles.placeholder} />
                  </div>
                  <div className={styles.primeNationwideOptionsParent}>
                    <h1 className={styles.primeNationwideOptions}>
                      Prime Nationwide Options
                    </h1>
                    <div className={styles.exploreOurDiverse}>
                      Explore our diverse and unparalleled portfolio of office
                      spaces, offering the finest options strategically located
                      across the nation
                    </div>
                  </div>
                </div>
                <div className={styles.solutions}>
                  <div className={styles.solutionItems}>
                    <img
                      className={styles.solutionItemIcon}
                      alt=""
                      src="/frame-21@2x.png"
                    />
                    <h3 className={styles.comprehensiveOfficeSolutions}>
                      Comprehensive Office Solutions
                    </h3>
                  </div>
                  <div className={styles.solutionItems}>
                    <img
                      className={styles.solutionItemIcon}
                      alt=""
                      src="/frame-21@2x.png"
                    />
                    <h3 className={styles.comprehensiveOfficeSolutions}>
                      Strategically Located Premium Spaces
                    </h3>
                  </div>
                  <div className={styles.solutionItems2}>
                    <img
                      className={styles.solutionItemIcon}
                      alt=""
                      src="/frame-21@2x.png"
                    />
                    <h3 className={styles.comprehensiveOfficeSolutions}>
                      Cost-Effective Solutions with Modern Amenities
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.content2}>
            <div className={styles.questions}>
              <h1 className={styles.questionsInMind}>Questions in mind?</h1>
              <div className={styles.link}>
                <h1 className={styles.readOurFaq}>Read our FAQ</h1>
              </div>
            </div>
          </div>
          <div className={styles.fAQ}>
            <div className={styles.content3}>
              <div className={styles.divider} />
              <div className={styles.questionsList}>
                <div className={styles.questionItem}>
                  <div className={styles.howCanA}>
                    How can a virtual office benefit my business in India?
                  </div>
                  <div className={styles.answer}>
                    <img
                      className={styles.answerChild}
                      loading="lazy"
                      alt=""
                      src="/group-356222.svg"
                    />
                  </div>
                </div>
                <div className={styles.questionItem1}>
                  <div className={styles.canILegally}>
                    Can I legally register my business using a virtual office
                    address in India?
                  </div>
                  <div className={styles.questionItemInner}>
                    <img
                      className={styles.answerChild}
                      alt=""
                      src="/group-356211.svg"
                    />
                  </div>
                </div>
                <div className={styles.questionItem2}>
                  <div className={styles.howWillI}>
                    How will I receive my business mail and packages with a
                    virtual office?
                  </div>
                  <div className={styles.questionItemChild}>
                    <img
                      className={styles.answerChild}
                      alt=""
                      src="/group-356211.svg"
                    />
                  </div>
                </div>
                <div className={styles.questionItem3}>
                  <div className={styles.canIUse}>
                    Can I use a virtual office address for official
                    correspondence and marketing materials?
                  </div>
                  <div className={styles.questionItemInner}>
                    <img
                      className={styles.answerChild}
                      alt=""
                      src="/group-35621-2.svg"
                    />
                  </div>
                </div>
                <div className={styles.questionItem4}>
                  <div className={styles.canIUse}>
                    Do virtual office services in India include call answering
                    and forwarding?
                  </div>
                  <div className={styles.questionItemInner}>
                    <img
                      className={styles.answerChild}
                      alt=""
                      src="/group-35621-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.questionsList1}>
              <div className={styles.divider} />
              <div className={styles.questionsList2}>
                <div className={styles.questionItem5}>
                  <div className={styles.howCanI}>
                    How can I cancel my virtual office service if needed?
                  </div>
                  <img
                    className={styles.questionItemItem}
                    alt=""
                    src="/group-35622-1.svg"
                  />
                </div>
                <div className={styles.questionItem6}>
                  <div className={styles.isItPossible}>
                    Is it possible to upgrade or downgrade my virtual office
                    plan as my business needs change?
                  </div>
                  <img
                    className={styles.questionItemChild1}
                    alt=""
                    src="/group-35621-4.svg"
                  />
                </div>
                <div className={styles.questionItem7}>
                  <div className={styles.canIAccess}>
                    Can I access meeting rooms and conference facilities with a
                    virtual office plan?
                  </div>
                  <img
                    className={styles.questionItemChild2}
                    alt=""
                    src="/group-35621-51.svg"
                  />
                </div>
                <div className={styles.questionItem8}>
                  <div className={styles.areThereAny}>
                    Are there any additional fees or hidden costs associated
                    with virtual office services in India?
                  </div>
                  <img
                    className={styles.questionItemChild3}
                    alt=""
                    src="/group-35621-6.svg"
                  />
                </div>
                <div className={styles.questionItem9}>
                  <div className={styles.whatKindOf}>
                    What kind of documentation do I need to provide to set up a
                    virtual office in India?
                  </div>
                  <img
                    className={styles.questionItemChild4}
                    alt=""
                    src="/group-35621-7.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container;
