import styles from "./Directions.module.css";
import Map from "../Map";

export default function Directions() {
  return (
    <div id="directions" className={styles.directions}>
      <div className="box">
        <h2>Directions</h2>

        <p>
          Garfield Cemetery, 3015 South Elberton Road, Garfield, Washington.
        </p>
        <p>
          From Main Street, take South 3rd Street to Elberton Road. When you
          pass the Trap and Rifle Range, turn into the cemetery.
        </p>
        <Map />
        <h2>Find A Gravestone:</h2>
        <p>Coming soon.</p>
      </div>
    </div>
  );
}
