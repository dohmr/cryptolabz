import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Initial', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
  datasets: [
    {
      label: 'Faux Investment',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      // options={{ maintainAspectRatio: false }},
      data: [40, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default class Chart extends Component {
  render() {
    return (
      <div>
        <h2>Potential Risk</h2>
        <Line 
        ref="chart" 
        data={data}
        width={100}
        height={25}
        options={{ maintainAspectRatio: true }} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}