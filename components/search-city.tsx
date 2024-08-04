import type { NextPage } from "next";
import styles from "./search-city.module.css";

export type SearchCityType = {
  className?: string;
};

const SearchCity: NextPage<SearchCityType> = ({ className = "" }) => {
  return (
    <div className={[styles.searchCity, className].join(" ")}>
      <div className={styles.searchNearbyBtn}>
        <div className={styles.searchNearbyBtnChild} />
        <div className={styles.searchBtn}>
          <div className={styles.icon}>
            <div className={styles.fromASingle}>
              From a single desk to a whole building. The choice is yours.
            </div>
            <div className={styles.trendingCitiesWrapper}>
              <div className={styles.trendingCities}>.</div>
            </div>
          </div>
        </div>
        <h1 className={styles.discoverTheUltimate}>
          Discover the Ultimate Workspace Solution
        </h1>
      </div>
      <div className={styles.divrtl1l2eiwbFormholdercss}>
        <div className={styles.form}>
          <div className={styles.divrtlOie8m1Iconalignmentcs}>
            <input
              className={styles.heading}
              placeholder="Search city"
              type="text"
            />
            <div className={styles.button}>
              <div className={styles.searchNearby}>Search Nearby</div>
            </div>
          </div>
          <div className={styles.button1}>
            <img
              className={styles.icon1}
              loading="lazy"
              alt=""
              src="/navigation2-111.svg"
            />
            <div className={styles.search}>Search</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCity;
