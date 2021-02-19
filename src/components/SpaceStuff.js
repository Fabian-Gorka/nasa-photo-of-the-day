
import React, {useEffect,useState} from 'react'

const space = props => {
    const {title, image, information, date, video } = props;

    return (
        <div>
        <h2>{title}</h2> 
        <p>{date}</p>
        <img src = {image} alt = "" />
        <p>{information}</p>
       
        </div>
    )
}
export default space;