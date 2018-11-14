import React from "react";
import styles from "./styles.module.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export class Header extends React.Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Navbar
        id="nav"
        className={styles.navigation}
        color="dark"
        fixed="top"
        dark
        expand="md"
      >
        <NavbarBrand className={styles.brand} href="#home">
          HC
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#home" className={styles.link}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about" className={styles.link}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skills" className={styles.link}>
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects" className={styles.link}>
                Projects
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
