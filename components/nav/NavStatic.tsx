// NavStatic gets rendered on the server side
// and therefor doesn't have any client side interactivity

import styles from "./Nav.module.scss";
import Link from "next/link";

const NavStatic = () => {
  return (
    <nav className={`${styles.nav} ${styles.show}`}>
      <ul>
        <li>
          <Link className={styles.clickable} href={"/"}>
            Go back
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavStatic;
