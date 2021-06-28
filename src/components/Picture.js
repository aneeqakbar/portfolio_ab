import React, { useState } from 'react'
import './Picture.css'
import SocialLogos from './SocialLogos.js'

function Picture({pic}) {

    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth,
        updated: false
      })
      React.useEffect(() => {
        function handleResize() {
            if (dimensions.updated === false) {
                setDimensions({
                    height: window.innerHeight,
                    width: window.innerWidth,
                    updated: true
                })
                setTimeout(() => {
                    let dimensionsCopy = dimensions
                    dimensionsCopy.updated = false
                    setDimensions({
                        dimensionsCopy
                    })
                }, 500);
            }
    }window.addEventListener('resize', handleResize)})

    function toggle_popup(class_add,class_remove,interval) {
        let images = document.querySelectorAll('.social_logos > a > img')
        let int = -(interval);
        images.forEach(img=>{
            if (img.classList.contains(class_add)) {
                return
            }
            setTimeout(()=>{
                img.classList.remove(class_remove)
                img.classList.add(class_add)
            },int+=interval)
        })
    }
    return (
        <div className={"picture__main"} onScroll={()=>{toggle_popup('hide-popup','show-popup',300)}} onClick={()=>{toggle_popup('hide-popup','show-popup',300)}}>
            <div className={'picture__sub__cont'}
                onPointerEnter={()=>{toggle_popup('show-popup','hide-popup',400)}}
            >
                <div className={"picture__circle"}></div>
                <img src={pic} alt=''/>
            </div>
            <SocialLogos />
        </div>
    )
}

export default Picture
