import React, { useEffect, useState } from "react";

import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/Home.module.css";

const TIMER = 1000 * 10;

type ProjectData = {
  name: string;
  url: string;
  image: { src: string; width: number; height: number };
  p1: string;
  p2?: string;
};
const projects: ProjectData[] = [
  {
    name: "Kwara Connect",
    url: "https://kwara.com/",
    image: {
      src: "/images/kwara.png",
      width: 300,
      height: 566,
    },
    p1: " Kwara offers a modern banking back-office solution for over 120 credit unions and their members.",
    p2: "Connect App enables more than 40,000 members to conveniently access their accounts and perform transactions using their mobile devices.",
  },
  {
    name: "Kaax",
    url: "https://www.gokaax.com/",
    image: {
      src: "/images/kaax.png",
      width: 400,
      height: 305,
    },
    p1: "Kaax is Mexico's first international payment platform that allows its users to buy, sell and transfer up to 13 currencies.",
    p2: "KAAX reduced trading time from hours to less than a minute and broker costs by 70%. ",
  },
  {
    name: "Active Terra",
    url: "https://www.activeterra.com/index.html",
    image: {
      src: "/images/activeT.png",
      width: 400,
      height: 305,
    },
    p1: "Active Terra is a Farm ERP that empowers producers in the agriculture industry.",
    p2: "It provides a data analyzing management platform. It's sensor-agnostic and features an easy-to-use mobile interface.",
  },
];

export default function Projects() {
  const [projectIndex, setProjectIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (projectIndex < projects.length - 1) {
        setProjectIndex((prev) => prev + 1);
      } else {
        setProjectIndex(0);
      }
    }, TIMER);
    return () => clearInterval(interval);
  }, [projectIndex]);

  return (
    <section className={styles.projectsSectiion}>
      <div className={utilStyles.heading3Xl}>
        Work & <br />
        Projects
      </div>
      <Card
        key={projects[projectIndex].name}
        projectData={projects[projectIndex]}
        projectIndex={projectIndex}
        onIndexClick={setProjectIndex}
      />
    </section>
  );
}

function Card({
  projectData,
  projectIndex,
  onIndexClick,
}: {
  projectData: ProjectData;
  projectIndex: number;
  onIndexClick: Function;
}) {
  const { name, url, image } = projectData;
  const { src, width, height } = image;
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardContainer}>
        <div className={styles.info}>
          <div className={utilStyles.heading2Xl}>
            <a href={url} target="_blank">
              {name}
            </a>
          </div>
          <div className={utilStyles.headingMd}>
            <p>{projects[projectIndex].p1}</p>
            <br />
            <p>{projects[projectIndex].p2}</p>
          </div>
          <div className={utilStyles.flex}>
            {projects.map((_, i) => (
              <div
                key={String(i)}
                onClick={() => onIndexClick(i)}
                className={projectIndex === i ? styles.dotSelected : styles.dot}
              ></div>
            ))}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.projectImage}
            src={src}
            height={height}
            width={width}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
}
