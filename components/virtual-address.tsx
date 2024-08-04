import type { NextPage } from "next";
import styles from "./virtual-address.module.css";

export type VirtualAddressType = {
  className?: string;
};

const VirtualAddress: NextPage<VirtualAddressType> = ({ className = "" }) => {
  return (
    <section className={[styles.virtualAddress, className].join(" ")}>
      <div className={styles.useVirtualAddress}>
        <h1 className={styles.useVirtualAddress1}>Use Virtual Address For</h1>
        <div className={styles.companyRegistration}>
          <div className={styles.companyRegistrationItems}>
            <img
              className={styles.companyRegistrationIcon}
              loading="lazy"
              alt=""
              src="/companyregistration@2x.png"
            />
            <div className={styles.registrationFeatures}>
              <div className={styles.streamlinedGstRegistration}>
                Company Registration
              </div>
              <div className={styles.enhanceYourProfessional}>
                {" "}
                Enhance your professional image and organizational presence by
                choosing a virtual address over your residential one.
              </div>
            </div>
          </div>
          <div className={styles.companyRegistrationItems1}>
            <img
              className={styles.companyRegistrationIcon}
              loading="lazy"
              alt=""
              src="/companyregistration1@2x.png"
            />
            <div className={styles.registrationFeatures}>
              <div className={styles.streamlinedGstRegistration}>
                Streamlined GST Registration
              </div>
              <div className={styles.enhanceYourProfessional}>
                Simplify your GST registration process through the use of a
                virtual address, meeting government requirements efficiently and
                affordably.
              </div>
            </div>
          </div>
          <div className={styles.companyRegistrationItems2}>
            <img
              className={styles.companyRegistrationIcon}
              loading="lazy"
              alt=""
              src="/companyregistration2@2x.png"
            />
            <div className={styles.registrationFeatures}>
              <div className={styles.streamlinedGstRegistration}>
                Centralized Business Hub
              </div>
              <div className={styles.enhanceYourProfessional}>
                Establish your virtual office as the hub of your business
                operations, utilizing it as your official business and mailing
                address, ensuring efficient mail handling without physical
                office space constraints.
              </div>
            </div>
          </div>
          <div className={styles.companyRegistrationItems2}>
            <img
              className={styles.companyRegistrationIcon}
              loading="lazy"
              alt=""
              src="/companyregistration3@2x.png"
            />
            <div className={styles.registrationFeatures}>
              <div className={styles.efficientCallManagement}>
                Efficient Call Management
              </div>
              <div className={styles.enhanceYourProfessional}>
                Ensure seamless communication with clients and stakeholders by
                routing all calls to your virtual address, where a virtual
                receptionist provides professional and prompt responses.
              </div>
            </div>
          </div>
          <div className={styles.companyRegistrationItems4}>
            <img
              className={styles.companyRegistrationIcon}
              loading="lazy"
              alt=""
              src="/companyregistration4@2x.png"
            />
            <div className={styles.flexibleMeetingSolutionsParent}>
              <div className={styles.streamlinedGstRegistration}>
                Flexible Meeting Solutions
              </div>
              <div className={styles.impressInvestorsAnd}>
                Impress investors and clients with access to fully-equipped
                meeting facilities, including boardrooms and conference rooms,
                available on-demand without the commitment of traditional office
                leases.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualAddress;
