import React from 'react'
import utilStyles from "../../styles/utils.module.css";
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default function Main() {
  return (
    <section className={utilStyles.heading3Xl}>
      <span>
        Hey! <br />
        I&rsquo;m Marian Garcia.
      </span>
      <p className={utilStyles.heading2Xl}>
        Frontend Engineer. JS. ReactJs. NextJs. Typescript.
        <div>
          {social.map((network) => (
            <a key={network.name} target="_blank" href={network.url} className={utilStyles.icon}>
              <FontAwesomeIcon width={25} height={25} icon={network.className} />
            </a>
          ))}
        </div>
      </p>
      <span>
    </span>
  </section>
  )
}
