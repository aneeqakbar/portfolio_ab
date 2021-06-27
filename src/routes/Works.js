import './Works.css'
import React,{useContext, useState} from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {motion} from 'framer-motion'
import {MotionContext} from '../Contexts.js'
import TextLogo from '../components/TextLogo';
import WorksList from '../components/WorksList.js';

function Works() {

    const context = useContext(MotionContext)

    return (
        <motion.div className={'main main__works'}
        style={context.pageStyle}
        initial='initial'
        animate='in'
        exit='out'
        variants={context.pageVariants}
        transition={context.pageTransition}
        >
            <RouterLink to='/' className='a_no_style'>
                <TextLogo title='GoBack'/>
            </RouterLink>
            <WorksList />
        </motion.div>
        )
    }

export default Works

