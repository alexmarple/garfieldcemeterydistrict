import styles from "./Activities.module.css";

const Activities = () => {
  return (
    <div id="activities" className={styles.activities}>
      <div className="box">
        <h2>Activities & Events</h2>
        <p>No current activities or events.</p>
        <h3>Past Activities:</h3>
        <p>Memorial Day Veterans Tribute, May 26th, 2025 at 11am.</p>
        <p>
          Come see the improvements we have done to the cemetery and out
          beautification program. This is the last American Legion salute and
          come show your appreciation for the great job they have done.
        </p>
      </div>
    </div>
  );
};

export default Activities;
