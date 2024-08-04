import type { NextPage } from "next";
import VirtualAddress from "../components/virtual-address";
import Navigation2 from "../components/navigation2";
import OfficeSpaceDescription from "../components/office-space-description";
import CitySearchContainer from "../components/city-search-container";
import Link1 from "../components/link1";
import Link2 from "../components/link2";
import FlexibleWorkspaceContainer from "../components/flexible-workspace-container";
import VirtualOfficeBenefits from "../components/virtual-office-benefits";
import ExpertConsultation from "../components/expert-consultation";
import CompanyLogos from "../components/company-logos";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import styles from "./android-large.module.css";

const AndroidLarge: NextPage = () => {
  return (
    <div className={styles.androidLarge1}>
      <VirtualAddress />
      <section className={styles.navigationContainer}>
        <Navigation2 />
        <div className={styles.pictureHomepageSerachv2Of}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <img
            className={styles.imageElementsIcon}
            alt=""
            src="/image-elements@2x.png"
          />
          <img
            className={styles.bangalore1Icon}
            loading="lazy"
            alt=""
            src="/bangalore-1.svg"
          />
          <img
            className={styles.image3Icon}
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          <OfficeSpaceDescription />
          <img className={styles.image3Icon1} alt="" src="/image-3-1@2x.png" />
          <CitySearchContainer />
        </div>
      </section>
      <section className={styles.solutionsContainer}>
        <div className={styles.solutions}>
          <Link1 />
          <Link2 />
          <div className={styles.link}>
            <div className={styles.workspaceIconsvgWrapper}>
              <img
                className={styles.workspaceIconsvg}
                loading="lazy"
                alt=""
                src="/workspace-iconsvg.svg"
              />
            </div>
            <div className={styles.frameParent}>
              <div className={styles.bookWorkspaceWrapper}>
                <div className={styles.bookWorkspace}>Book workspace</div>
              </div>
              <div className={styles.bookMeetingRoomsAndDayOffParent}>
                <div className={styles.bookMeetingRoomsContainer}>
                  <p className={styles.bookMeetingRooms}>
                    Book meeting rooms and
                  </p>
                  <p className={styles.bookMeetingRooms}>day offices now</p>
                </div>
                <img className={styles.frameChild} alt="" src="/arrow-1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.link1}>
            <div className={styles.virtualIconsvgWrapper}>
              <img
                className={styles.virtualIconsvg}
                loading="lazy"
                alt=""
                src="/virtual-iconsvg.svg"
              />
            </div>
            <div className={styles.frameParent}>
              <div className={styles.setUpAVirtualOfficeWrapper}>
                <div className={styles.setUpA}>Set up a virtual office</div>
              </div>
              <div className={styles.startBuildingARealPresenceParent}>
                <div className={styles.bookMeetingRoomsContainer}>
                  <p className={styles.bookMeetingRooms}>
                    Start building a real
                  </p>
                  <p className={styles.bookMeetingRooms}>presence today</p>
                </div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/arrow-1-3.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.link2}>
            <div className={styles.membershipIconsvgWrapper}>
              <img
                className={styles.membershipIconsvg}
                loading="lazy"
                alt=""
                src="/membership-iconsvg@2x.png"
              />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.bookWorkspaceWrapper}>
                <div className={styles.buyAMembership}>Buy a Membership</div>
              </div>
              <div className={styles.bookMeetingRoomsAndDayOffParent}>
                <div className={styles.bookMeetingRoomsContainer}>
                  <p className={styles.bookMeetingRooms}>Access thousands of</p>
                  <p className={styles.bookMeetingRooms}>locations on demand</p>
                </div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/arrow-1-4.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.link3}>
            <div className={styles.appIconssvgWrapper}>
              <img
                className={styles.appIconssvg}
                loading="lazy"
                alt=""
                src="/app-iconssvg@2x.png"
              />
            </div>
            <div className={styles.frameParent}>
              <div className={styles.bookWorkspaceWrapper}>
                <div className={styles.bookWorkspace}>Explore our app</div>
              </div>
              <div className={styles.downloadOurAppAndGetStartParent}>
                <div className={styles.downloadOurAppContainer}>
                  <p className={styles.bookMeetingRooms}>
                    Download our app and get
                  </p>
                  <p className={styles.bookMeetingRooms}>started today</p>
                </div>
                <img className={styles.frameChild} alt="" src="/arrow-1.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FlexibleWorkspaceContainer />
      <section className={styles.workspaceSolution}>
        <div className={styles.solutionDescription}>
          <div className={styles.solutionHeading}>
            <h1 className={styles.discoverTheUltimate}>
              Discover the Ultimate Workspace Solution
            </h1>
            <div className={styles.emptyDescription}>
              <div className={styles.div}>.</div>
            </div>
          </div>
          <div className={styles.fromSoloEntrepreneurs}>
            From solo entrepreneurs to growing teams, find everything you need
            under one roof. Whether it's pay-per-use plans or fixed desks, our
            flexible options cater to your unique work style, ensuring seamless
            productivity and success.
          </div>
        </div>
      </section>
      <VirtualOfficeBenefits />
      <ExpertConsultation />
      <section className={styles.androidLarge1Inner}>
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group-48095425@2x.png"
        />
      </section>
      <section className={styles.trustedCompanies}>
        <div className={styles.companiesHeadingParent}>
          <div className={styles.companiesHeading}>
            <h1 className={styles.trustedByTheContainer}>
              <span>Trusted by the world’s largest companies</span>
              <span className={styles.span}>.</span>
            </h1>
          </div>
          <CompanyLogos />
          <div className={styles.businessMetrics}>
            <div className={styles.metricsContainer}>
              <img
                className={styles.metricsImageIcon}
                loading="lazy"
                alt=""
                src="/rectangle-13@2x.png"
              />
              <div className={styles.rectangleParent}>
                <div className={styles.rectangleDiv} />
                <div className={styles.metricContainerOne}>
                  <div className={styles.metricOne}>
                    <div className={styles.valueOne}>10,000+</div>
                    <div className={styles.metricNameOne}>
                      <div className={styles.clientsServed}>Clients Served</div>
                    </div>
                  </div>
                </div>
                <div className={styles.metricContainerTwo}>
                  <div className={styles.metricTwo}>
                    <div className={styles.valueTwo}>200+</div>
                  </div>
                  <div className={styles.locationsAcrossIndia}>
                    Locations Across India
                  </div>
                </div>
                <div className={styles.metricContainerThree}>
                  <div className={styles.metricThree}>
                    <div className={styles.valueThree}>
                      <div className={styles.valueFour}>150+</div>
                    </div>
                    <a className={styles.consultants}>Consultants</a>
                  </div>
                </div>
                <div className={styles.metricTwo}>
                  <div className={styles.metricOne}>
                    <div className={styles.valueTwo}>500+</div>
                    <div className={styles.consultancyLabel}>
                      <a className={styles.partners}>Partners</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent2 />
          <FrameComponent3 />
        </div>
        <div className={styles.finalSpace}>
          <div className={styles.emptyContent}>.</div>
        </div>
      </section>
    </div>
  );
};

export default AndroidLarge;
