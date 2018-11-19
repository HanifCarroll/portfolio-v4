import React from "react";
import styles from "./styles.module.scss";
import { SocialIcons } from "../../../components/SocialIcons/index";

export class HomeSection extends React.Component {
  render() {
    return (
      <div id="home" className={styles.container}>
        <img
          className={styles.profilePic}
          src={require("../profile.jpg")}
          alt="Hanif Carroll"
        />
        <h1 className={styles.heading}>Hanif Carroll</h1>
        <h3 className={styles.subheading}>Web/Mobile Developer</h3>
        <SocialIcons />
      </div>
    );
  }
}
