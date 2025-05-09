import styles from "./Documents.module.css";

const Documents = () => {
  return (
    <div id="documents">
      <h2>Cemetery District Documents</h2>
      <p>
        Agendas include old business, new business, bill paying and approval,
        and recognizing visitors.
      </p>
      <ul className={styles.documentsList}>
        <li>Document 1</li>
        <li>Document 2</li>
        <li>Document 3</li>
      </ul>
    </div>
  );
};

export default Documents;
