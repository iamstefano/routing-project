import { Outlet } from "react-router-dom";
import styles from "./root.module.scss";

const Root = () => {
  return (
    <section className={styles.Root}>
      <Outlet />
    </section>
  );
};

export default Root;
