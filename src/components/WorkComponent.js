import React from 'react'
import './WorkComponent.css'
import no_preview from '../media/no_preview.jpeg'

function WorkComponent({work}) {
    return (
        <a href={work.link} target={'_blank'} rel={'noreferrer'} className={'work__component__main a_no_style'}>
        <div className={'work__component'}>
            <div className={'img__cont'} style={{backgroundImage: `url(${work.imgUrl}),url(${no_preview})`}}></div>
            <p>
                {work.content}
            </p>
        </div>
        </a>
    )
}

export default WorkComponent
