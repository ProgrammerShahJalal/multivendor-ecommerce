import React, { Fragment } from 'react'

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds, offerTill }) => {
    return (
        <Fragment>
            <div>
                <div>
                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <p>{timerDays}</p>
                            <small>Days</small>
                        </div>
                        <span>:</span>
                        <div>
                            <p>{timerHours}</p>
                            <small>Hours</small>
                        </div>
                        <span>:</span>
                        <div>
                            <p>{timerMinutes}</p>
                            <small>Minutes</small>
                        </div>
                        <span>:</span>
                        <div>
                            <p>{timerSeconds}</p>
                            <small>Seconds</small>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Clock.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
}

export default Clock;