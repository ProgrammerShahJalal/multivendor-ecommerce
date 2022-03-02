import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notify() {
    let customId = "success1";

    let notify = () => {
        toast("What's Up!", {
            toastId: customId
        });
    }

    const [cNotify, setCNotify] = useState(notify);

    const Updating = () => {
        notify = () => {
            toast("Welcome to Unity Mart!", {
                toastId: customId
            });
        }
        notify = () => {
            toast("Cool! You are now right place!", {
                toastId: customId
            });
            toast('Visit Our Special Deal', { delay: 6000 },
                { toastId: customId });
            toast('View More Latest Product!', { delay: 7000 },
                { toastId: customId });
        }
        setCNotify(notify);

    }

    setInterval(Updating, 17000);

    return (
        <div>
            <ToastContainer
                position='bottom-left'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}
export default Notify;