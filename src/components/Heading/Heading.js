import React from 'react';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const Heading = props => {
  const { title } = props;
  const useStyles = makeStyles({
    main: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '2% 1% 1% 1%'
    }
  });
  const st = useStyles();
  return (
    <div className={st.main}>
      <Typography variant='h5' display='block' gutterBottom>
        {`${title} Coronavirus Cases`}
      </Typography>
    </div>
  );
};

export default Heading;
