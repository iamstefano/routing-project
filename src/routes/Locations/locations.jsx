import { Mock } from "../../helpers/mock";
import styles from "./locations.module.scss";
import { useNavigate } from "react-router-dom";

const Locations = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.Locations}>
      {Mock.map(
        ({ imageUrl, name, id, rating, description, amenities, price }) => (
          <div
            key={id}
            className={styles["Locations-locationCard"]}
            onClick={() => navigate("/locations/" + id)}
          >
            <img
              src={imageUrl}
              alt={name}
              title={name}
              className={styles["Locations-locationCardImage"]}
            />
            <div className={styles["Locations-locationCardBody"]}>
              <div className={styles["Locations-locationCardBody-basicInfo"]}>
                <h3>{name}</h3>
                <span>{rating}☆</span>
              </div>
              <p className={styles["Locations-locationCardBody-description"]}>
                {description}
              </p>
              <div className={styles["Locations-locationCardBody-footer"]}>
                <div
                  className={
                    styles["Locations-locationCardBody-footer-amenities"]
                  }
                >
                  {amenities.map((amenity) => (
                    <span key={amenity}>{amenity}</span>
                  ))}
                </div>
                <span
                  className={styles["Locations-locationCardBody-footer-price"]}
                >
                  €{price}
                </span>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Locations;
