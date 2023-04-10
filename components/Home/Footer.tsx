import React from "react";
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/Layout.module.css";

const social = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/mariana-garc%C3%ADa-b629aab9/",
    className: faLinkedinIn,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/marian.software.eng/",
    className: faInstagram,
  },
  {
    name: "github",
    url: "https://github.com/mariangace",
    className: faGithub,
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconsContainer}>
        {social.map((network) => (
          <a
            key={network.name}
            target="_blank"
            href={network.url}
            className={utilStyles.iconWhite}
          >
            <FontAwesomeIcon width={25} height={25} icon={network.className} />
          </a>
        ))}
      </div>
      <p>Created with ❤️ by Marian G.</p>
    </footer>
  );
}
