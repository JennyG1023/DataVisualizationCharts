import React from 'react';
import Grid from './Grid';
import Chart from './Chart';

const VisualType = (props) => {
    const { selectedLine, data, visualizationType } = props;
    return (
        <div className='visual-type'> 
            {
                visualizationType === 'grid'
                ? (
                <div className='ReactTable'>
                    <Grid selectedLine={selectedLine} data={data} />
                </div>)
                : (
                <div className='line-graph'>
                    <Chart selectedLine={selectedLine} />  
                </div>)
            }   
        </div>

    )
}

export default VisualType;