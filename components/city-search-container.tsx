import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import styles from "./city-search-container.module.css";

export type CitySearchContainerType = {
  className?: string;
};

const CitySearchContainer: NextPage<CitySearchContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.citySearchContainer, className].join(" ")}>
      <div className={styles.searchFormContainer}>
        <div className={styles.searchForm}>
          <div className={styles.form}>
            <div className={styles.citySearch}>
              <div className={styles.searchYourCity}>Search your city</div>
            </div>
            <div className={styles.label}>
              <div className={styles.divrtlOie8m1Iconalignmentcs}>
                <img className={styles.icon} alt="" src="/icon.svg" />
              </div>
              <div className={styles.button}>
                <input
                  className={styles.searchNearby}
                  placeholder="Search Nearby"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.trendingCitiesContainer}>
          <div className={styles.trendingCities}>
            <div className={styles.trendingCitiesTitle}>
              <div className={styles.trendingCities1}>Trending cities</div>
            </div>
            <FrameComponent
              newDelhi="New Delhi"
              noida="Noida"
              bangalore="Bangalore"
            />
          </div>
        </div>
        <div className={styles.moreCitiesContainer}>
          <FrameComponent
            newDelhi="Mumbai"
            propMinWidth="35px"
            propTextDecoration="none"
            noida="Hyderabad"
            propMinWidth1="48px"
            bangalore="Chennai"
            propMinWidth2="36px"
            propTextDecoration1="none"
          />
        </div>
      </div>
    </div>
  );
};

export default CitySearchContainer;
