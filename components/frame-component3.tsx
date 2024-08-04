import type { NextPage } from "next";
import FAQList from "./f-a-q-list";
import Content from "./content";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.questionsParentParent, className].join(" ")}>
      <div className={styles.questionsParent}>
        <div className={styles.questionsContent}>
          <div className={styles.questionsTitleParentWrapper}>
            <div className={styles.questionsTitleParent}>
              <div className={styles.questionsTitleContent}>
                <h1 className={styles.questionsInMind}>Questions in mind?</h1>
                <div className={styles.readFAQ}>
                  <h3 className={styles.readOurFaq}>Read our FAQ</h3>
                </div>
              </div>
              <div className={styles.questionsDivider}>
                <div className={styles.dividerParent}>
                  <div className={styles.dividers} />
                  <div className={styles.dividers} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fAQListParent}>
            <FAQList
              howCanAVirtualOfficeBenef="How can a virtual office benefit my business in India?"
              group35622="/group-35622.svg"
            />
            <FAQList
              howCanAVirtualOfficeBenef="Can I legally register my business using a virtual office address in India?"
              propTextDecoration="unset"
              propPadding="14.7px 0px 0px"
              group35622="/group-35622.svg"
            />
            <FAQList
              howCanAVirtualOfficeBenef="How will I receive my business mail and packages with a virtual office?"
              propTextDecoration="unset"
              propPadding="15.1px 0px 0px"
              group35622="/group-35622.svg"
            />
            <textarea
              className={styles.fAQList}
              placeholder="Can I use a virtual office address for official correspondence and marketing materials?"
              rows={5}
              cols={16}
            />
            <FAQList
              howCanAVirtualOfficeBenef="Do virtual office services in India include call answering and forwarding?"
              propTextDecoration="unset"
              propPadding="15px 0px 0px"
              group35622="/group-35622.svg"
            />
            <FAQList
              howCanAVirtualOfficeBenef="How can I cancel my virtual office service if needed?"
              propTextDecoration="unset"
              propPadding="15.4px 0px 0px"
              group35622="/group-35622.svg"
            />
            <FAQList
              howCanAVirtualOfficeBenef="Is it possible to upgrade or downgrade my virtual office plan as my business needs change?"
              propTextDecoration="unset"
              propPadding="24.9px 0px 0px"
              group35622="/group-35622.svg"
            />
            <FAQList
              howCanAVirtualOfficeBenef="Can I access meeting rooms and conference facilities with a virtual office plan?"
              propTextDecoration="unset"
              propPadding="25.3px 0px 0px"
              group35622="/group-35621-5.svg"
            />
            <textarea
              className={styles.fAQList1}
              placeholder="Are there any additional fees or hidden costs associated with virtual office services in India?"
              rows={5}
              cols={16}
            />
            <FAQList
              howCanAVirtualOfficeBenef="What kind of documentation do I need to provide to set up a virtual office in India?"
              propTextDecoration="unset"
              propPadding="25.2px 0px 0px"
              group35622="/group-35622.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div className={styles.footerTop}>
              <img
                className={styles.headerLogo884459461Icon}
                loading="lazy"
                alt=""
                src="/headerlogo88445946-1-1.svg"
              />
              <div className={styles.socialLinks}>
                <img
                  className={styles.linkFacebook}
                  loading="lazy"
                  alt=""
                  src="/link--facebook.svg"
                />
                <img
                  className={styles.linkFacebook}
                  loading="lazy"
                  alt=""
                  src="/link--instagram.svg"
                />
                <img
                  className={styles.linkFacebook}
                  loading="lazy"
                  alt=""
                  src="/link--linkedin.svg"
                />
                <img
                  className={styles.linkTwitter}
                  loading="lazy"
                  alt=""
                  src="/link--twitter.svg"
                />
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.servicesParent}>
                <b className={styles.services}>Services</b>
                <div className={styles.pageLinks}>
                  <div className={styles.virtualOffice}>Virtual Office</div>
                  <div className={styles.gstRegistration}>GST Registration</div>
                  <div className={styles.coworkingSpaces}>Coworking Spaces</div>
                  <div className={styles.businessRegistration}>
                    Business Registration
                  </div>
                  <div className={styles.mailingAddress}>Mailing Address</div>
                  <div className={styles.dedicatedDesk}>Dedicated Desk</div>
                </div>
              </div>
              <div className={styles.servicesParent}>
                <b className={styles.virtualOffice}>Other Pages</b>
                <div className={styles.pageLinks}>
                  <a className={styles.home}>Home</a>
                  <a className={styles.aboutUs}>About Us</a>
                  <a className={styles.contactUs}>Contact Us</a>
                  <a className={styles.blog}>Blog</a>
                  <div className={styles.findLocation}>Find Location</div>
                  <div className={styles.faqs}>FAQ's</div>
                </div>
              </div>
              <div className={styles.servicesParent}>
                <b className={styles.otherLink}>Other Link</b>
                <div className={styles.pageLinks}>
                  <a className={styles.privacyPolicy}>Privacy Policy</a>
                  <div className={styles.disclaimer}>Disclaimer</div>
                  <a
                    className={styles.termsConditions}
                  >{`Terms & Conditions`}</a>
                  <a className={styles.cookies}>Cookies</a>
                  <div className={styles.findLocation}>Refund policy</div>
                </div>
              </div>
            </div>
            <div className={styles.newsletterParentParent}>
              <Content
                propWidth="unset"
                propAlignSelf="stretch"
                propMinWidth="114px"
              />
              <div className={styles.feelFreeToConnectWithUsParent}>
                <div className={styles.feelFreeTo}>
                  Feel free to connect with us
                </div>
                <div className={styles.contactInfo}>
                  <img
                    className={styles.contactDetailsIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-5.svg"
                  />
                  <div className={styles.contactDetails}>+91 93112 21210</div>
                  <img
                    className={styles.email1Icon}
                    loading="lazy"
                    alt=""
                    src="/email-1.svg"
                  />
                  <div className={styles.virtualofficeteamcowork}>
                    virtualoffice@teamco.work
                  </div>
                  <img
                    className={styles.navigation21Icon}
                    loading="lazy"
                    alt=""
                    src="/navigation2-1.svg"
                  />
                  <div className={styles.palmCourtMehrauliGurgaon}>
                    704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana
                    122007
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.bottomFooter}>
          <div className={styles.bottomContainer}>
            <div className={styles.bottomContent}>
              <b className={styles.businessRegistration}>
                Virtual Office in Major Cities
              </b>
              <div className={styles.virtualOfficeIn1}>
                Virtual Office in Delhi | Virtual Office in Gurgaon | Virtual
                Office in Bangalore | Virtual Office in Mumbai | Virtual Office
                in Pune | Virtual Office in Kolkata | Virtual Office in
                Chennai | Virtual Office in Noida | Virtual Office in
                Kochi | Virtual Office in Jaipur | Virtual Office in
                Hyderabad | Virtual Office in Chandigarh | Virtual Office in
                Lucknow | Virtual Office in Mohali
              </div>
            </div>
            <div className={styles.virtualOfficeForGstInMajoParent}>
              <b className={styles.businessRegistration}>
                Virtual Office for GST in Major Cities
              </b>
              <div className={styles.virtualOfficeFor1}>
                Virtual Office for GST in Delhi | Virtual Office for GST in
                Gurgaon | Virtual Office for GST in Bangalore | Virtual Office
                for GST in Mumbai | Virtual Office for GST in Pune | Virtual
                Office for GST in Kolkata | Virtual Office for GST in
                Chennai | Virtual Office for GST in Noida | Virtual Office for
                GST in Kochi | Virtual Office for GST in Jaipur | Virtual Office
                for GST in Hyderabad | Virtual Office for GST in
                Lucknow | Virtual Office for GST in Chandigarh | Virtual Office
                for GST in Mohali
              </div>
            </div>
            <div className={styles.virtualOfficeForBusinessInParent}>
              <b className={styles.businessRegistration}>
                Virtual Office for Business in Major Cities
              </b>
              <div className={styles.virtualOfficeFor3}>
                Virtual Office for Business in Delhi | Virtual Office for
                Business in Gurgaon | Virtual Office for Business in
                Bangalore | Virtual Office for Business in Mumbai | Virtual
                Office for Business in Pune | Virtual Office for Business in
                Kolkata | Virtual Office for Business in Chennai | Virtual
                Office for Business in Noida | Virtual Office for Business in
                Kochi | Virtual Office for Business in Jaipur | Virtual Office
                for Business in Hyderabad | Virtual Office for Business in
                Lucknow | Virtual Office for Business in Chandigarh | Virtual
                Office for Business in Mohali
              </div>
            </div>
            <div className={styles.virtualOfficeWithMailingAdParent}>
              <b className={styles.virtualOfficeWith}>
                Virtual Office with Mailing Address in Major Cities
              </b>
              <div className={styles.virtualOfficeWith1}>
                Virtual Office with Mailing Address in Delhi | Virtual Office
                with Mailing Address in Gurgaon | Virtual Office with Mailing
                Address in Bangalore | Virtual Office with Mailing Address in
                Mumbai | Virtual Office with Mailing Address in Pune | Virtual
                Office with Mailing Address in Kolkata | Virtual Office with
                Mailing Address in Chennai | Virtual Office with Mailing Address
                in Noida | Virtual Office with Mailing Address in
                Kochi | Virtual Office with Mailing Address in Jaipur | Virtual
                Office with Mailing Address in Hyderabad | Virtual Office with
                Mailing Address in Lucknow | Virtual Office with Mailing Address
                in Chandigarh | Virtual Office with Mailing Address in Mohali
              </div>
            </div>
            <div className={styles.firstDivider} />
          </div>
          <div className={styles.secondDividerParent}>
            <div className={styles.secondDivider} />
            <div className={styles.copyrightInfo}>
              <div className={styles.copyright2019}>
                Copyright © 2019, Team Cowork. All Rights Reserved
              </div>
              <div className={styles.poweredByMxn}>
                Powered by MXN Realspaces Pvt Ltd
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FrameComponent3;
