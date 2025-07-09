import styles from './Info.module.css';
import Map from '../Map';

const Info = () => {
  return (
    <div id='about'>
      <div className={styles.info}>
        <div className={styles.border}>
          <h1>The Whitman County Cemetery District #2</h1>
          <h2>
            A place for our loved ones to rest peacefully and for us to visit
            them.
          </h2>
          <p>Located in Garfield, Wa.</p>
          <p>
            Cemetery hours of operation are sunrise to sunset, seven days a
            week.
          </p>
          <p>
            Due to inclement weather, the cemetery is closed November 1st to
            March 1st.
          </p>
          <p>
            Contact us about urn and vault burials to get the most up to date
            information on price, placement, and other important details about
            your loved ones.
          </p>
          <p>
            Board Meetings are the first Wednesday of every month in the JE Love
            Conference Room at 7pm, unless changed (if changed there will be an
            alert on this website).
          </p>
          <p>
            The Garfield Cemetery is a recognized Washington Pioneer Corporation
            that’s been continuously incorporated in Washington State since
            March 20, 1889 and recognize by the Washington Secretary of State as
            a Pioneer Corporation during the Washington Centennial in 1989.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
