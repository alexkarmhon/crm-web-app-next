import React from 'react';

import styles from './styles.module.css';

export interface LoaderProps {}

const Dot = () => {
  return <div className={styles.dot}></div>;
};

export default function Loader({}: LoaderProps) {
  return (
    <div className={styles.loader}>
      <Dot />
      <Dot />
      <Dot />
    </div>
  );
}
