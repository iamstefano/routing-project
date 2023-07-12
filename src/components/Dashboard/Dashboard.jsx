import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "../helpers/mock";
import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isLogged, setLogged] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("Users")));
  }, []);

  return (
    <div className={styles.Dashboard}>
      <p>
        User logged name: <b>{Users.username} </b>
      </p>
      <p>
        User logged password:{" "}
        <b>{showPassword ? Users.password : "*******"} </b>
        <button onClick={togglePasswordVisibility}>
          {" "}
          {showPassword ? "Hide" : "Show"}
        </button>
      </p>
    </div>
  );
}
