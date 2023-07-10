import { Link, Outlet } from "react-router-dom";
import styles from "./layout.module.scss";

const Layout = () => {
  return (
    <section className={styles.Layout}>
      <header>
        <h1>{"AIR BNB CLONE"}</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
          </ul>
        </nav>
        <h3>{"i"}</h3>
      </header>
      <section className={styles["Layout-content"]}>
        <Outlet />
      </section>
    </section>
  );
};

export default Layout;
