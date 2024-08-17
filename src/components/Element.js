import React from 'react'

export default function Element(props) {
    if(props.id === 0){
        return (
            <object style={{objectFit: "fill",width:props.width, height:props.height}} type="application/pdf" data={props.url}>
                <a href={props.url} target="_blank" rel="noreferrer"><img alt="" src="/images/previews/cv.png" style={{objectFit: "fill",width:props.width, height:props.height}}/></a>
            </object>
        )
    }
    else if(props.id === 1){
        return(
            <img alt="" src={props.url} style={{objectFit: "fill",width:props.width, height:props.height}}/>
        )
    }
    else if(props.id === 2){
        return (
            <video src={props.url}  muted controls style={{objectFit: "contain",width:props.width, height:props.height}}/>
        )
    }
}