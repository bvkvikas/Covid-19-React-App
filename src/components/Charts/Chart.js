import React, { PureComponent } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions';

import styles from './Chart.module.css';

class Chart extends PureComponent {
  render() {
    const { timeline } = this.props;
    // console.log(this.props);
    return (
      <div className={styles.container}>
        {timeline[0] ? (
          <Line
            data={{
              labels: timeline.map(({ date }) => date),
              datasets: [
                {
                  data: timeline.map(data => data.confirmed),
                  label: 'Infected',
                  borderColor: '#3333ff',
                  fill: true
                },
                {
                  data: timeline.map(data => data.deaths),
                  label: 'Deaths',
                  borderColor: 'red',
                  backgroundColor: 'rgba(255, 0, 0, 0.5)',
                  fill: true
                },
                {
                  data: timeline.map(data => data.recovered),
                  label: 'Recovered',
                  borderColor: 'green',
                  backgroundColor: 'rgba(141, 202, 103, 0.5)',
                  fill: true
                }
              ]
            }}
          />
        ) : null}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    timeline: state.feedReducers.timeline
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
