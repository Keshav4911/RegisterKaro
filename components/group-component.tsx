import type { NextPage } from "next";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.sectionWrapper, className].join(" ")}>
      <div className={styles.section}>
        <div className={styles.registrationOptions}>
          <h1 className={styles.useVirtualAddress}>Use Virtual Address For</h1>
          <div className={styles.options}>
            <img
              className={styles.companyRegistrationIcon}
              loading="lazy"
              alt=""
              src="/companyregistration5@2x.png"
            />
            <div className={styles.optionContent}>
              <h2 className={styles.companyRegistration}>
                Company Registration
              </h2>
              <div className={styles.enhanceYourProfessional}>
                {" "}
                Enhance your professional image and organizational presence by
                choosing a virtual address over your residential one.
              </div>
            </div>
          </div>
          <div className={styles.options1}>
            <img
              className={styles.companyRegistrationIcon}
              loading="lazy"
              alt=""
              src="/companyregistration6@2x.png"
            />
            <div className={styles.streamlinedGstRegistrationParent}>
              <h2 className={styles.streamlinedGstRegistration}>
                Streamlined GST Registration
              </h2>
              <div className={styles.simplifyYourGst}>
                Simplify your GST registration process through the use of a
                virtual address, meeting government requirements efficiently and
                affordably.
              </div>
            </div>
          </div>
          <div className={styles.options2}>
            <img
              className={styles.companyRegistrationIcon}
              loading="lazy"
              alt=""
              src="/companyregistration7@2x.png"
            />
            <div className={styles.centralizedBusinessHubParent}>
              <h2 className={styles.streamlinedGstRegistration}>
                Centralized Business Hub
              </h2>
              <div className={styles.establishYourVirtual}>
                Establish your virtual office as the hub of your business
                operations, utilizing it as your official business and mailing
                address, ensuring efficient mail handling without physical
                office space constraints.
              </div>
            </div>
          </div>
          <div className={styles.options3}>
            <img
              className={styles.companyRegistrationIcon}
              alt=""
              src="/businessmailingaddress-1@2x.png"
            />
            <div className={styles.optionContent}>
              <h2 className={styles.streamlinedGstRegistration}>
                Efficient Call Management
              </h2>
              <div className={styles.enhanceYourProfessional}>
                Ensure seamless communication with clients and stakeholders by
                routing all calls to your virtual address, where a virtual
                receptionist provides professional and prompt responses.
              </div>
            </div>
          </div>
          <div className={styles.options3}>
            <img
              className={styles.companyRegistrationIcon}
              alt=""
              src="/businessmailingaddress-2@2x.png"
            />
            <div className={styles.optionContent}>
              <h2 className={styles.streamlinedGstRegistration}>
                Flexible Meeting Solutions
              </h2>
              <div className={styles.enhanceYourProfessional}>
                Impress investors and clients with access to fully-equipped
                meeting facilities, including boardrooms and conference rooms,
                available on-demand without the commitment of traditional office
                leases.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionInner}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-480954251@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
