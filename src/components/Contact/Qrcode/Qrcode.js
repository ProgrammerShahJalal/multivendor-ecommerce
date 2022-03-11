import React from 'react';
import QRCode from 'qrcode.react';

const Qrcode = () => {
    return (
        <div>
            <QRCode
                id='abc'
                value='https://unitymart-c522a.web.app/'
            />
        </div>
    );
};

export default Qrcode;