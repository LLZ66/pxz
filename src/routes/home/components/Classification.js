import React from 'react';
import styles from './Classification.css'
function Classification(props) {
  const {name} = props;
  return (
    <span className={styles.classification}>{name}</span>
  )
}
export default Classification