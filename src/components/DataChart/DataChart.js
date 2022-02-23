import React from 'react';
import {Bar} from 'react-chartjs-2'
const DataChart = () => {
    return (
        <div>
            <Bar
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
            }}
            height={200}
            width={300}
            />
        </div>
    );
};

export default DataChart;