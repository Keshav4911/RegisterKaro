import type { NextPage } from "next";
import styles from "./image-gallery.module.css";

export type ImageGalleryType = {
  className?: string;
};

const ImageGallery: NextPage<ImageGalleryType> = ({ className = "" }) => {
  return (
    <div className={[styles.imageGallery, className].join(" ")}>
      <div className={styles.images}>
        <img
          className={styles.image1Icon}
          loading="lazy"
          alt=""
          src="/image-11@2x.png"
        />
      </div>
      <div className={styles.images1}>
        <img className={styles.imagesChild} alt="" src="/rectangle-2@2x.png" />
      </div>
      <img
        className={styles.bangalore1Icon}
        loading="lazy"
        alt=""
        src="/bangalore-11.svg"
      />
      <div className={styles.images2}>
        <img className={styles.image3Icon} alt="" src="/image-31@2x.png" />
      </div>
      <div className={styles.images2}>
        <img className={styles.image3Icon} alt="" src="/image-21@2x.png" />
      </div>
      <div className={styles.images1}>
        <img className={styles.image3Icon1} alt="" src="/image-3-11@2x.png" />
      </div>
    </div>
  );
};

export default ImageGallery;
