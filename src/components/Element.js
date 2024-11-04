import React, { useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import _ from '../datas/Const'

export default function Element(props) {
  const [load, setLoad] = useState(false)

  const handleLoad = () => {
    setLoad(true) // Triggered when the image or video has loaded
  }

  if (props.url.startsWith(_.IMAGE_PATH)) {
    return (
      <>
        {/* Skeleton is displayed while loading */}
        {!load && (
          <Skeleton
            variant="rectangular"
            width={props.width}
            height={props.height}
            style={{ position: 'absolute' }}
          />
        )}
        {/* Image is hidden until loaded */}
        <img
          alt={props.name}
          src={props.url}
          style={{
            objectFit: 'fill',
            width: props.width,
            height: props.height,
            display: load ? 'block' : 'none',
          }}
          onError={(e) => {
            _.handleErrorFile(e)
          }}
          onLoad={handleLoad}
        />
      </>
    )
  } else if (props.url.startsWith(_.VIDEO_PATH)) {
    return (
      <>
        {/* Skeleton is displayed while loading */}
        {!load && (
          <Skeleton
            variant="rectangular"
            width={props.width}
            height={props.height}
            style={{
                display: load ? 'none' : 'block',
            }}
          />
        )}
        <video
          key={props.url}
          src={props.url}
          alt={props.name}
          muted
          controls
          playsInline
          poster={props.preview}  // Add a path to your desired preview image
          style={{
            objectFit: 'contain',
            width: props.width,
            height: props.height,
          }}
          onError={(e) => {
            _.handleErrorFile(e)
          }}
          //onLoadedData={handleLoad}
          onCanPlay={handleLoad} // Trigger load completion here
          //onLoadedMetadata={handleLoad} // Trigger load completion here
        />
      </>
    )
  }

  return null
}
