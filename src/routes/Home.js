import './Home.css'
import React,{useContext, useState} from 'react'
import Headings from '../components/Headings';
import Picture from '../components/Picture';
import TextLogo from '../components/TextLogo';
import profilePic from '../media/myPic1.jpeg'

import {motion} from 'framer-motion'
import {MotionContext} from '../Contexts.js'

function Home() {
    const [headings, setHeadings] = useState(
    [{title:'Hello.',onhover:'About',link:'/about'},
    {title:'I am',onhover:'Work',link:'/work'},
    {title:'Abeer',onhover:'Contact',link:'/contact'}])

    const context = useContext(MotionContext)

    return (
        <motion.div className={'main main__home'}
        style={context.pageStyle}
        initial='initial'
        animate='in'
        exit='out'
        variants={context.pageVariants}
        transition={context.pageTransition}
        >
            <TextLogo title='Welcome'/>
            <Headings headings={headings}/>
            <Picture pic={profilePic}/>
        </motion.div>
        )
    }

export default Home

