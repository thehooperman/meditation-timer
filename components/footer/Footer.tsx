import { FC } from "react";
import styles from "./Footer.module.scss";

type FooterProps = {
  isSection?: boolean;
};

const Footer: FC<FooterProps> = ({ isSection }) => {
  return (
    <footer
      id="footer"
      className={`${styles.footer} ${isSection ? styles.section : ""}`}
    >
      &copy; {new Date().getFullYear()}
    </footer>
  );
};
export default Footer;
