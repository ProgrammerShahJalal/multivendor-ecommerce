import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notify() {
    const clearWaitingQueue = () => {
        toast.clearWaitingQueue();
    }

    let customId = "success1";

    let notify = () => {
        toast.success("Hey! How can we help you?", {
            pauseOnFocusLoss: false
        }, {
            toastId: customId
        }, {
            theme: "dark"
        });
    }

    const [cNotify, setCNotify] = useState(notify);

    const Updating = () => {
        notify = () => {
            toast.info("Welcome to Unity Mart!", {
                pauseOnFocusLoss: false
            }, {
                toastId: customId
            }, { delay: 10000 },
                {
                    theme: "dark"
                });
            toast.success("Cool! You are now right place!", {
                pauseOnFocusLoss: false
            }, {
                toastId: customId
            }, { delay: 32000 }, {
                theme: "dark"
            });
            toast('Visit Our Special Deal', {
                pauseOnFocusLoss: false
            }, { delay: 56000 },
                { toastId: customId }, {
                theme: "dark"
            });
        }
        setCNotify(notify);

    }

    setInterval(Updating, 25000);

    return (
        <div>
            <ToastContainer
                position='bottom-left'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                limit={1}
            />
        </div>
    );
}
export default Notify;