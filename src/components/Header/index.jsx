import React from "react";
import ResponsiveMenu from "react-responsive-navbar";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import styles from "./styles.module.scss";

export class Header extends React.Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<IoMdMenu size="50" />}
        menuCloseButton={<IoMdClose size="50" />}
        changeMenuOn="500px"
        largeMenuClassName={styles.large}
        smallMenuClassName={styles.small}
        menu={
          <div id="nav" className={styles.container}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        }
      />
    );
  }
}
