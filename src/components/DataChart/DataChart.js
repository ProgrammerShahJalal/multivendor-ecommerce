import React from 'react';
import {Bar} from 'react-chartjs-2';
const DataChart = () => {
    return (
        <div>
            
            <Bar
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets:[
                    {
                        label: '# of votes',
                        data: [123,234,67,849,4,7]
                    }
                ]
            }}
            options={{
                maintainAspectRatio: false,

            }}
            height={200}
            width={300}
            />
        </div>
    );
};

export default DataChart;