import React, { useState } from 'react';

const Watch = () => {

    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }

    setInterval(UpdateTime, 1000);

    return (
        <div>
            <h1>{ctime}</h1>
        </div>
    );
};

export default Watch;