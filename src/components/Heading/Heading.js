import React from 'react';
import { Typography } from '@material-ui/core';

import styles from './Heading.module.css';

const Heading = props => {
  const { title } = props;
  return (
    <div className={styles.main}>
      <Typography variant='h5' gutterBottom>
        {`${title} Coronavirus Cases`}
      </Typography>
    </div>
  );
};

export default Heading;
