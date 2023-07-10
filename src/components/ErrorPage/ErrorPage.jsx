import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.ErrorPage}>
      <h1>Error 404</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to="/" /* className="link_404" */>Return back</Link>
    </div>
  );
}
