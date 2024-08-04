import type { NextPage } from "next";
import DivswiperSlide1 from "./divswiper-slide1";
import styles from "./flexible-workspace-container.module.css";

export type FlexibleWorkspaceContainerType = {
  className?: string;
};

const FlexibleWorkspaceContainer: NextPage<FlexibleWorkspaceContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.flexibleWorkspaceContainer, className].join(" ")}
    >
      <div className={styles.flexibleWorkspace}>
        <div className={styles.workspaceDescription}>
          <h1 className={styles.heading2}>
            Flexible workspace designed around your needs
          </h1>
          <div className={styles.workspaceContent}>
            <div className={styles.pricingContainer}>
              <div className={styles.pricing}>
                <img
                  className={styles.spanrtlM4q803ImagecontainerIcon}
                  alt=""
                  src="/spanrtlm4q803imagecontainer@2x.png"
                />
                <div className={styles.pricesForIndia}>Prices for India</div>
              </div>
              <div className={styles.citySearchPricing}>
                <div className={styles.searchInputPricing}>
                  <div className={styles.searchIconPricingContainer}>
                    <img className={styles.icon} alt="" src="/icon-1.svg" />
                  </div>
                  <div className={styles.searchForA}>
                    Search for a city or area to refine pricing
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ourFlexibleFullyCustomisab}>
              Our flexible, fully-customisable office rentals are available by
              the hour, day, or as long as you need.
            </div>
          </div>
        </div>
        <div className={styles.privateOfficesContainer}>
          <DivswiperSlide1 heading2PrivateOffices="Private offices" />
          <DivswiperSlide1
            heading2PrivateOffices="Custom"
            propDisplay="unset"
            propMinWidth="unset"
            propHeight="16px"
            propDisplay1="unset"
            propMinWidth1="unset"
            propHeight1="16px"
            propDisplay2="unset"
            propMinWidth2="unset"
            propDisplay3="unset"
            propMinWidth3="unset"
            propDisplay4="unset"
            propMinWidth4="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default FlexibleWorkspaceContainer;
