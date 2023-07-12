import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
/* import { Users } from "../helpers/mock"; */
import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  const navigate = useNavigate();

  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("auth")));
  }, []);

  return isLogged ? (
    <div className={styles.Dashboard}>
      <p>Nome</p>
      <p>Email</p>
      <p>Age</p>
    </div>
  ) : (
    navigate("/login")
  );
}
