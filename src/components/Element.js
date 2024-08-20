import React from 'react'
import { IMAGE_PATH, VIDEO_PATH } from '../datas/Const'

export default function Element(props) 
{
    if(props.url.startsWith(IMAGE_PATH))
    {
        return (
            <img alt="" src={props.url} style={{objectFit: "fill",width:props.width, height:props.height}}/>
        )
    }
    else if(props.url.startsWith(VIDEO_PATH))
    {
        return (
            <video src={props.url}  muted controls style={{objectFit: "contain",width:props.width, height:props.height}}/>
        )
    }
}