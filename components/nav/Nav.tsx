import { FC } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";

type NavProps = {
  isScrolled?: boolean;
  scrollToSection: (section: string) => void;
};

const Nav: FC<NavProps> = ({ isScrolled, scrollToSection }) => {
  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.show : ""}`}>
      <ul>
        <li
          className={styles.clickable}
          onClick={() => scrollToSection("home")}
        >
          Back to Top
        </li>
        <li
          className={styles.clickable}
          onClick={() => scrollToSection("footer")}
        >
          T&Cs
        </li>
        {/* <li onClick={() => scrollToSection("meditate")}> Meditation</li>
              <li onClick={() => scrollToSection("test")}> Test</li> */}
      </ul>
    </nav>
  );
};
export default Nav;
