import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.homePageInner, className].join(" ")}>
      <div className={styles.sectionParent}>
        <div className={styles.section}>
          <div className={styles.testimonialList}>
            <div className={styles.testimonial}>
              <div className={styles.profileImageParent}>
                <div className={styles.profileImage}>
                  <img
                    className={styles.profileShapesIcon}
                    alt=""
                    src="/profile-shapes@2x.png"
                  />
                  <img
                    className={styles.profileShapesIcon1}
                    loading="lazy"
                    alt=""
                    src="/rectangle-21341@2x.png"
                  />
                </div>
                <b className={styles.suraj}>SURAJ</b>
              </div>
            </div>
            <div className={styles.testimonials}>
              <div className={styles.backgroundShapesParent}>
                <img
                  className={styles.backgroundShapesIcon}
                  alt=""
                  src="/background-shapes@2x.png"
                />
                <img
                  className={styles.backgroundShapesIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-21351@2x.png"
                />
              </div>
            </div>
            <div className={styles.testimonials1}>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.backgroundShapesIcon}
                  alt=""
                  src="/rectangle-21281@2x.png"
                />
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/rectangle-21361@2x.png"
                />
              </div>
            </div>
            <div className={styles.shapeParent}>
              <img className={styles.shapeIcon} alt="" src="/shape1@2x.png" />
              <img
                className={styles.frameInner}
                alt=""
                src="/group-480953661.svg"
              />
              <div className={styles.contentDetails}>
                <div className={styles.detailsContent}>
                  <b className={styles.shruti}>SHRUTI</b>
                  <div className={styles.ceo}>{`CEO `}</div>
                </div>
              </div>
            </div>
            <div className={styles.testimonials1}>
              <div className={styles.rectangleGroup}>
                <img
                  className={styles.backgroundShapesIcon}
                  alt=""
                  src="/rectangle-21331@2x.png"
                />
                <img
                  className={styles.backgroundShapesIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-21371@2x.png"
                />
              </div>
            </div>
            <div className={styles.testimonials3}>
              <div className={styles.backgroundShapesParent}>
                <img
                  className={styles.backgroundShapesIcon}
                  alt=""
                  src="/rectangle-21321@2x.png"
                />
                <img
                  className={styles.backgroundShapesIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-21381@2x.png"
                />
              </div>
            </div>
            <div className={styles.testimonial}>
              <div className={styles.testimonialImageParent}>
                <div className={styles.profileImage}>
                  <img
                    className={styles.profileShapesIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-21311@2x.png"
                  />
                  <div className={styles.imagePlaceholder} />
                </div>
                <b className={styles.kartik}>KARTIK</b>
              </div>
            </div>
          </div>
          <div className={styles.testimonialContainer1}>
            <div className={styles.testimonial1}>
              <div className={styles.testimonialContent}>
                <h1 className={styles.clientTestimonials}>
                  Client Testimonials
                </h1>
              </div>
              <div className={styles.weLoveHearing}>
                We love hearing feedback from our valued clients. Here's what
                some of our satisfied customers have to say about our services.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonialNames}>
          <div className={styles.name}>
            <b className={styles.amit}>AMIT</b>
          </div>
          <b className={styles.vartika}>vARTIKA</b>
        </div>
        <div className={styles.testimonialNames1}>
          <div className={styles.names}>
            <b className={styles.lokesh}>LOKESH</b>
            <b className={styles.lauren}>Lauren</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
