/* eslint-disable react/jsx-one-expression-per-line */
import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    backgroundColor: props => props.color
  },
  title: {
    fontSize: 12
  }
});

const CasesComponent = props => {
  const { color, header, data } = props;
  const styles = useStyles();
  return (
    <Card style={{ backgroundColor: color }} variant='outlined'>
      <CardContent>
        {header}
        {data}
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CasesComponent;
