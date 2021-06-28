import React from 'react'
import Heading from './Heading.js';
import './Headings.css';

function Headings({headings}) {

    function handleSwap(e) {
        let headings = document.querySelectorAll('.heading')
        headings.forEach(heading => {
            let children = heading.children
            for (const i in children) {
                if (Object.hasOwnProperty.call(children, i)) {
                    const element = children[i];
                    if (element.classList.contains('heading_link')) {
                        element.classList.toggle('heading_link_animation', false)
                        element.classList.toggle('heading_link_animation_mobile', true)
                    }else{
                        element.classList.toggle('heading_title_animation',true)
                    }
                    element.classList.toggle('hidden')
                }
            }
        });
    }
    return (
        <div className='heading__main'>
            <p className={'heading__swap'} onClick={(event)=>{handleSwap(event)}}>Swap</p>
            {headings.map((heading,index) =>(
                <Heading key={index} heading={heading}/>
            ))}
        </div>
    )
}

export default Headings
