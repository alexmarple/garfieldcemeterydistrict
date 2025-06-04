import styles from './Documents.module.css';

const Documents = () => {
  return (
    <div id='documents' className={styles.documents}>
      <h2>Documents</h2>
      <p>
        Agendas include old business, new business, bill paying and approval,
        and recognizing visitors.
      </p>
      <p>No documents at this time. Check back later.</p>
      {/* <ul className={styles.documentsList}>
        <li>May 2025 Meeting</li>
        <li>April 2025 Meeting</li>
        <li>March 2025 Meeting</li>
        <li>February 2025 Meeting</li>
        <li>January 2025 Meeting</li>
        <li>December 2024 Meeting</li>
      </ul> */}
    </div>
  );
};

export default Documents;
