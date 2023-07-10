import { useParams } from "react-router-dom";
import styles from "./location.module.scss";

const Location = () => {
  const { locationId } = useParams();
  console.log(locationId);
  return <section className={styles.Location}>{locationId}</section>;
};

export default Location;
