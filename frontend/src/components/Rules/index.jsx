import styles from './Rules.module.css';

const Rules = () => {
  return (
    <div id='rules' className={styles.rules}>
      <div className='box'>
        <h2>Rules</h2>
        <ul className={styles.rulesList}>
          <li>All burials will be accompanied by a burial certificate.</li>
          <li>
            All burials will be accomplished by cemetery staff or their
            designated agents.
          </li>
          <li>All burials will be assigned a purchased cemetery plot.</li>
          <li>All burials will involve a vault, a coffin and or an urn.</li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
