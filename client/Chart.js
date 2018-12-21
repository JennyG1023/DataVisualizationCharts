import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = (props) => {
  const {name, times, values, sector}= props.selectedLine;
  const sectorName = sector ? sector : ''
  const data = {
    labels: times,
    datasets: [
      {
        label: sectorName + ' Sector Value',
        lineTension: 0.1,
        backgroundColor: 'rgb(147, 188, 220, 0.4)',
        borderColor: 'rgb(147, 188, 220, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(169, 73, 73)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(147, 188, 220, 1)',
        pointHoverBorderColor: 'rgb(169, 73, 73)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: values,
      }
    ]
  };

  return (
    <div>
      <div className='selected-name-header'>{name}</div>
      <Line data={data} />
    </div>
  )
};

export default Chart;
