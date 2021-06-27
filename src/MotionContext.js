import React from 'react';
import {MotionContext} from './Contexts.js';

const MotionContextProvider = (props) => {
    const pageVariants = {
        initial: {
            opacity: 0,
            x: "-100vw",
            scale: 0.8
        },
        in: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            x: "200vw",
            scale: 1.2
        }
    };
    
    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
    };
    
    const pageStyle = {
        // position: "absolute"
    };
    return (
        <MotionContext.Provider value={{
            pageStyle: pageStyle,
            pageTransition: pageTransition,
            pageVariants: pageVariants
        }}>
            {props.children}
        </MotionContext.Provider>
    );
}

export default MotionContextProvider