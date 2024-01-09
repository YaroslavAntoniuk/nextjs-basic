import { Params } from '@/types';
import styles from './style.module.css';
import React from 'react';

const DocsIdPage: React.FC<Params> = ({ params }) => {
  return (
    <div className={styles.title}>
      <h1>Docs ID Page</h1>
      <p>ID: {params.id}</p>
    </div>
  );
}

export default DocsIdPage;