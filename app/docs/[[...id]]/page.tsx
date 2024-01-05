import styles from './style.module.css';

interface Params {
  id: string;
}

const DocsIdPage = ({ params }: { params: Params }) => {
  return (
    <div className={styles.title}>
      <h1>Docs ID Page</h1>
      <p>ID: {params.id}</p>
    </div>
  );
}

export default DocsIdPage;