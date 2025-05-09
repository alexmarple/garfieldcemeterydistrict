import styles from "./Rules.module.css";

const Rules = () => {
  return (
    <div id="rules" className={styles.rules}>
      <h2>Rules</h2>
      <p>The rules for the cemetery are as follows:</p>
      <ul className={styles.rulesList}>
        <li>Rule 1</li>
        <li>Rule 2</li>
        <li>Rule 3</li>
      </ul>
    </div>
  );
};

export default Rules;
