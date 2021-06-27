import React from 'react'
import './Heading.css'
import {Link} from 'react-router-dom'

function Heading({heading}) {
    function handleHover(e){
        let children = e.currentTarget.children

        for (const i in children) {
            if (Object.hasOwnProperty.call(children, i)) {
                const element = children[i];
                if (element.classList.contains('hidden')) {
                    element.classList.remove('hidden')
                }else{
                    element.classList.add('hidden')
                }
            }
        }
    }
    return (
        <div className={'heading'} onPointerEnter={(event)=>{handleHover(event)}} onPointerLeave={(event)=>{handleHover(event)}}>
            <p className={'heading_title'}>
                {heading.title}
            </p>
            <Link to={heading.link} className={'heading_link a_no_style hidden'}>
                {heading.onhover}
            </Link>
        </div>
    )
}

export default Heading
