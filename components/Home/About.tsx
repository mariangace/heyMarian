import React from "react";
import Image from "next/image";

import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/Home.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <AboutCard
          title={"Work with Agile Methologies"}
          description={
            "I have hands-on experience working with agile methodologies and hold a Scrum Master Certification."
          }
        />
        <AboutCard
          title={"Cross-functional teams"}
          description={
            "As a Frontend, I have strong communication skills that are essential for collaborating with Backend, Design, and Product teams."
          }
        />
        <AboutMeCard
          title={"About me"}
          description={
            "I'm passionate about creating innovative tech projects. In my free time, I love traveling, reading, listening to music and exercising."
          }
        />
      </div>
    </section>
  );
}

function AboutMeCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={styles.me}>
      <Image
        className={styles.profileImage}
        src="/images/picture.png"
        height={350}
        width={350}
        alt="Marian"
      />
      <div className={utilStyles.heading2Xl}>{title}</div>
      <div className={utilStyles.headingMd}>{description}</div>
    </div>
  );
}

function AboutCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={styles.about}>
      <div className={utilStyles.heading2Xl}>{title}</div>
      <div className={utilStyles.headingMd}>{description}</div>
      <div className={styles.dot} />
    </div>
  );
}
