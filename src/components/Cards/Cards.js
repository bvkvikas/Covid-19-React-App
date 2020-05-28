import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import styles from './Cards.module.css';

const useStyles = makeStyles({
  heading: {
    fontWeight: 'fontWeightLight',
    color: 'black',
    fontSize: 20
  },
  totalCases: {
    backgroundColor: 'rgba(255, 7, 58, 0.05)',
    color: 'rgba(255, 7, 58)'
  },
  activeCases: {
    backgroundColor: 'rgba(0, 0, 255, 0.05)',
    color: 'rgba(0, 0, 255)'
  },
  recovered: {
    backgroundColor: 'rgba(141, 202, 103, 0.05)',
    color: 'rgba(141, 202, 103)'
  },
  deceased: {
    backgroundColor: 'rgba(119, 119, 119,0.05)',
    color: 'rgba(119, 119, 119)'
  }
});

const Cards = props => {
  const {
    data: { active, cases, recovered, deaths, updated }
  } = props;
  const st = useStyles();
  return (
    <div className={styles.container}>
      <Grid container spacing={2} justify='center'>
        <Grid
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.totalCases)}
        >
          <CardContent className={cx(st.totalCases)}>
            <Typography className={st.heading}>Total Cases</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={cases} duration={1.8} separator=',' />
            </Typography>
            <Typography color='textSecondary'>
              {`Last Updated : ${new Date(updated).toDateString()}`}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.activeCases)}
        >
          <CardContent className={cx(st.activeCases)}>
            <Typography className={st.heading}>Active Cases</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={active} duration={1.5} separator=',' />
            </Typography>
            <Typography color='textSecondary'>
              {`Last Updated : ${new Date(updated).toDateString()}`}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent className={cx(st.recovered)}>
            <Typography className={st.heading}>Recovered</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={recovered} duration={1.5} separator=',' />
            </Typography>
            <Typography color='textSecondary'>
              {`Last Updated : ${new Date(updated).toDateString()}`}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent className={cx(st.deceased)}>
            <Typography className={st.heading}>Total Deaths</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={deaths} duration={1.5} separator=',' />
            </Typography>
            <Typography color='textSecondary'>
              {`Last Updated : ${new Date(updated).toDateString()}`}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
