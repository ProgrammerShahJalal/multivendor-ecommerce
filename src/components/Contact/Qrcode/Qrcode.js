import React from 'react';
import QRCode from 'qrcode.react';

const Qrcode = () => {
    return (
        <div className='text-center'>
            <QRCode
                id='abc'
                value='https://unitymart-c522a.web.app/'
            />
            <h2 className='dark:text-white'>Scan the QR Code</h2>
        </div>
    );
};

export default Qrcode;