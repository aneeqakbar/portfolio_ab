import React from 'react'

function List({title,list,className}) {
    return (
        <>
        <p style={{fontWeight:'bolder'}}>{title}</p>
        <ul className={className}>
            {
                list.map(line => {
                return(
                    <li>{line}</li>
                )}
            )}
        </ul>
        </>
    )
}

export default List
