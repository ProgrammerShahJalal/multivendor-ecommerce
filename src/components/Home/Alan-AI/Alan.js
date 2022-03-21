import React, { useLayoutEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '84787ff3269cf646bd91827538e26d002e956eca572e1d8b807a3e2338fdd0dc/stage';

const Alan = () => {

    /**
     * If run as a requestAnimationFrame callback, this
     * will be run at the start of the frame.
     */


    useLayoutEffect(() => {
        function updateScreen(time) {
            // Make visual updates here.
            alanBtn({
                key: alanKey,
                onCommand: ({ command }) => {
                    if (command === 'testCommand') {
                        alert('This code was executed');
                    }
                }
            })
        }

        requestAnimationFrame(updateScreen);
    }, [])

    return (
        <div>

        </div>
    );
};

export default Alan;