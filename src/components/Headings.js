import React from 'react'
import Heading from './Heading.js';
import './Headings.css';

function Headings({headings}) {
    return (
        <div className='heading__main'>
            {headings.map((heading,index) =>(
                <Heading key={index} heading={heading}/>
            ))}
        </div>
    )
}

export default Headings
