import type { NextPage } from "next";
import BenefitItems from "./benefit-items";
import BenefitItems1 from "./benefit-items1";
import styles from "./content1.module.css";

export type Content1Type = {
  className?: string;
};

const Content1: NextPage<Content1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.mainContent}>
        <div className={styles.mainContentInner}>
          <div className={styles.shapesWrapper}>
            <div className={styles.shapes}>
              <div className={styles.shape} />
              <img className={styles.shapeIcon} alt="" src="/shape@2x.png" />
              <img
                className={styles.shapeIcon1}
                loading="lazy"
                alt=""
                src="/rectangle-21401@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.solutionParent}>
          <div className={styles.solution}>
            <div className={styles.solutionContent}>
              <h1 className={styles.discoverTheUltimate}>
                Discover the Ultimate Workspace Solution
              </h1>
              <div className={styles.whitespace}>
                <div className={styles.div}>.</div>
              </div>
            </div>
            <div className={styles.fromSoloEntrepreneurs}>
              From solo entrepreneurs to growing teams, find everything you need
              under one roof. Whether it's pay-per-use plans or fixed desks, our
              flexible options cater to your unique work style, ensuring
              seamless productivity and success.
            </div>
          </div>
          <div className={styles.benefitsParent}>
            <div className={styles.benefits}>
              <div className={styles.benefitsList}>
                <BenefitItems
                  prestigiousBusinessAddres="Prestigious Business Addresses"
                  accessToPrestigiousBusine="Access to prestigious business addresses in key locations, enhancing your brand image and credibility."
                />
                <BenefitItems1
                  mailHandlingServices="Mail Handling Services"
                  efficientManagementOfMail="Efficient management of mail and packages, including forwarding, scanning, and storage, ensuring seamless communication."
                />
                <BenefitItems
                  propWidth="unset"
                  propAlignSelf="stretch"
                  prestigiousBusinessAddres="Flexibility and Cost-Effectiveness"
                  propWidth1="350px"
                  accessToPrestigiousBusine="Enjoy the flexibility of virtual office solutions with customizable plans, avoiding the high costs associated with traditional office leases."
                  propDisplay="inline-block"
                  propMinWidth="203px"
                />
                <BenefitItems1
                  propWidth="350px"
                  propAlignSelf="unset"
                  propWidth1="243px"
                  mailHandlingServices="Business Expansion"
                  efficientManagementOfMail="Expand your business footprint across India without the overhead costs of physical office space, enabling growth and scalability."
                  propMinWidth="203px"
                />
              </div>
              <div className={styles.presenceList}>
                <BenefitItems1
                  propWidth="334px"
                  propAlignSelf="unset"
                  propWidth1="259px"
                  mailHandlingServices="Nationwide Presence"
                  efficientManagementOfMail="Establish a presence in multiple cities across India without the need for physical office space."
                  propMinWidth="192px"
                />
                <BenefitItems1
                  propWidth="335px"
                  propAlignSelf="unset"
                  propWidth1="328px"
                  mailHandlingServices="Professional Call Answering"
                  efficientManagementOfMail="Professional receptionists manage incoming calls with personalized greetings, providing a professional image for your business."
                  propMinWidth="193px"
                />
                <BenefitItems1
                  propWidth="unset"
                  propAlignSelf="stretch"
                  propWidth1="287px"
                  mailHandlingServices="Meeting Room Facilities"
                  efficientManagementOfMail="Access to meeting rooms and conference facilities in various cities, allowing for seamless collaboration and client meetings."
                  propMinWidth="203px"
                />
              </div>
            </div>
            <div className={styles.expertWrapper}>
              <div className={styles.expert}>
                <div className={styles.talkToAn}>{`Talk to an expert >`}</div>
                <div className={styles.after} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
