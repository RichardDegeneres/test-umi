import React from 'react';
import styles from './ename.less';

export default function (props: any) {
  console.log(props.match, '---match');

  return (
    <div>
      <h1 className={styles.detail}>Page item1detail/ename</h1>
    </div>
  );
}
