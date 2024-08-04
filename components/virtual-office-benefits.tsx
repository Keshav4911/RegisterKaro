import type { NextPage } from "next";
import BenefitList from "./benefit-list";
import BenefitList1 from "./benefit-list1";
import styles from "./virtual-office-benefits.module.css";

export type VirtualOfficeBenefitsType = {
  className?: string;
};

const VirtualOfficeBenefits: NextPage<VirtualOfficeBenefitsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.virtualOfficeBenefits, className].join(" ")}>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitCategories}>
          <BenefitList
            prestigiousBusinessAddres="Prestigious Business Addresses"
            accessToPrestigiousBusine="Access to prestigious business addresses in key locations, enhancing your brand image and credibility."
          />
          <BenefitList1
            mailHandlingServices="Mail Handling Services"
            efficientManagementOfMail="Efficient management of mail and packages, including forwarding, scanning, and storage, ensuring seamless communication."
          />
          <BenefitList1
            propPadding="unset"
            mailHandlingServices="Flexibility and Cost-Effectiveness"
            efficientManagementOfMail="Enjoy the flexibility of virtual office solutions with customizable plans, avoiding the high costs associated with traditional office leases."
          />
          <BenefitList
            propWidth="182px"
            prestigiousBusinessAddres="Business Expansion"
            accessToPrestigiousBusine="Expand your business footprint across India without the overhead costs of physical office space, enabling growth and scalability."
          />
        </div>
        <div className={styles.additionalBenefits}>
          <BenefitList1
            propPadding="unset"
            mailHandlingServices="Nationwide Presence"
            efficientManagementOfMail="Establish a presence in multiple cities across India without the need for physical office space."
          />
          <BenefitList1
            propPadding="0px 5px 0px 0px"
            mailHandlingServices="Professional Call Answering"
            efficientManagementOfMail="Professional receptionists manage incoming calls with personalized greetings, providing a professional image for your business."
          />
          <BenefitList1
            propPadding="0px 5px 0px 0px"
            mailHandlingServices="Meeting Room Facilities"
            efficientManagementOfMail="Access to meeting rooms and conference facilities in various cities, allowing for seamless collaboration and client meetings."
          />
        </div>
      </div>
    </section>
  );
};

export default VirtualOfficeBenefits;
