import React from 'react';
import QRCode from 'qrcode.react';

const Qrcode = () => {
    return (
        <div className='flex w-full min-h-screen justify-center items-center mx-auto'>
            <QRCode
                id='abc'
                value='https://unitymart-c522a.web.app/'
            />
        </div>
    );
};

export default Qrcode;