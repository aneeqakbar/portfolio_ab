import React from 'react'
import './Heading.css'
import {Link} from 'react-router-dom'

function Heading({heading}) {
    function handleHover(e){
        if (window.innerWidth <= 425) {
            return
        }
        let children = e.currentTarget.children
        for (const i in children) {
            if (Object.hasOwnProperty.call(children, i)) {
                const element = children[i];
                if (element.classList.contains('heading_link')) {
                    element.classList.toggle('heading_link_animation_mobile', false)
                    element.classList.toggle('heading_link_animation', true)
                }else{
                    element.classList.toggle('heading_title_animation',false)
                }
                element.classList.toggle('hidden')
            }
        }
    }
   
    return (
        <div className={'heading'} onPointerEnter={(event)=>{handleHover(event)}} onPointerLeave={(event)=>{handleHover(event)}}>
            <p className={'heading_title'}>
                {heading.title}
            </p>
            <Link to={heading.link} className={'heading_link heading_link_animation a_no_style hidden'}>
                {heading.onhover}
            </Link>
        </div>
    )
}

export default Heading
