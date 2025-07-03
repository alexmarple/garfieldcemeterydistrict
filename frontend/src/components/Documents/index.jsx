import styles from './Documents.module.css';

const Documents = () => {
  return (
    <div id='documents' className={styles.documents}>
      <div className='box'>
        <h2>Documents</h2>
        <p>
          Agendas include old business, new business, bill paying and approval,
          and recognizing visitors.
        </p>
        <p>No documents at this time. Check back later.</p>
      </div>
    </div>
  );
};

export default Documents;
