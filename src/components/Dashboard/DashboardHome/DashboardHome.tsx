
import React from 'react'
// import './summary-box.scss'
// import Box from '../box/Box'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
// import { colors } from '../../constants'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
// const SummaryBox = ({ item }) => {
//     return (

//         <div className='summary-box'>
//             <div className="summary-box__info">
//                 <div className="summary-box__info__title">
//                     <div>{item.title}</div>
//                     <span>{item.subtitle}</span>
//                 </div>
//                 <div className="summary-box__info__value">
//                     {item.value}
//                 </div>
//             </div>
//             <div className="summary-box__chart">
//                 <CircularProgressbarWithChildren
//                     value={item.percent}
//                     strokeWidth={10}
//                     styles={buildStyles({
//                         trailColor: 'transparent',
//                         strokeLinecap: 'round'
//                     })}
//                 >
//                     <div className="summary-box__chart__value">
//                         {item.percent}%
//                     </div>
//                 </CircularProgressbarWithChildren>
//             </div>
//         </div>

//     )
// }

// export default SummaryBox

export const SummaryBoxSpecial = () => {
    const chartOptions = {
        responsive: true,
        scales: {
            xAxis: {
                display: false
            },
            yAxis: {
                display: false
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            point: {
                radius: 0
            }
        }
    }

    const chartData = {
        labels: ['jan', 'feb'],
        datasets: [
            {
                label: 'Revenue',
                data: [20, 30, 50, 40, 4, 50],
                borderColor: '#fff',
                tension: 0.5
            }
        ]
    }
    return (

        <div className="summary-box-special">
            {/* <div className="summary-box-special__title">
                {item.title}
            </div>
            <div className="summary-box-special__value">
                {item.value}
            </div> */}
            <div className="summary-box-special__chart">
                <Line options={chartOptions} data={chartData} width={`250px`} />
            </div>
        </div>

    )
}
