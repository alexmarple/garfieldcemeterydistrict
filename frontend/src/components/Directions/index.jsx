import styles from "./Directions.module.css";
import Map from "../Map";

export default function Directions() {
  return (
    <div id="directions" className={styles.directions}>
      <h2>Directions</h2>
      <p>
        From Main Street, take South 3rd Street to Elberton Road. When you pass
        the Trap and Rifle Range, turn into the cemetery.
      </p>
      <Map />
    </div>
  );
}
