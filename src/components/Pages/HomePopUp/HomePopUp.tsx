import React from 'react';
import Popup from 'reactjs-popup';
import './HomePopUp.css';

const HomePopUp = () => {

    return (
        <div className="">
            <Popup
                trigger={<button className="button bg-pink-500 text-blue-200 rounded-full px-3">Read More</button>}
                modal
                nested
            >
                {(close: any) => (
                    <div className="modal container mx-auto text-center bg-black text-gray-300 pb-8">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header"> More About Us</div>
                        <div className="content">
                            <div className="grid grid-cols-2">
                                <div className="w-50 rounded-lg">
                                    <img src="https://www.kindpng.com/picc/m/121-1219046_img-ecommerce-multi-vendor-hd-png-download.png" className='w-full px-2 rounded-lg' alt="" />
                                </div>
                                <div className="w-50 px-5 text-center">
                                    <p className="">A multi-vendor website or store is a platform for third-party vendors to sell in one place. In simple terms, it is a big shop that contains various small shops that are run by individual sellers.A multi-vendor website or store is a platform for third-party vendors to sell in one place. In simple terms, it is a big shop that contains various small shops that are run by individual sellers.A multi-vendor website or store is a platform for third-party vendors to sell in one place. In simple terms, it is a big shop that contains various small shops that are run by individual sellers.A multi-vendor website or store is a platform for third-party vendors to sell in one place. In simple terms, it is a big shop that contains various small shops that are run by individual sellers.A multi-vendor website or store is a platform for third-party vendors to sell in one place. In simple terms, it is a big shop that contains various small shops that are run by individual sellers.A multi-vendor website or store is a platform for third-party vendors to sell in one place. In simple terms, it is a big shop that contains various small shops that are run by individual sellers.A multi-vendor website or store is a platform for third-party vendors to sell in one place. In simple terms, it is a big shop that contains various small shops that are run by individual sellers.</p>
                                </div>
                            </div>

                        </div>
                        <div className="actions pb-3">
                            <button
                                className="button bg-pink-600 text-blue-200 rounded-full text-xl font-bold px-4"
                                onClick={() => {
                                    console.log('modal closed ');
                                    close();
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </Popup>
        </div >
    );
};

export default HomePopUp;