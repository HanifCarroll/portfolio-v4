import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "./styles.module.scss";

const urls = [
  "https://www.linkedin.com/in/hanifcarroll/",
  "mailto:HanifCarroll@gmail.com",
  "https://twitter.com/HanifCarroll",
  "https://github.com/HanifCarroll",
];

export const SocialIcons = () => {
  return (
    <div className={styles.container}>
      {urls.map(url => (
        <SocialIcon
          key={url}
          url={url}
          className={styles.icon}
          color="#535358"
        />
      ))}
    </div>
  );
};
