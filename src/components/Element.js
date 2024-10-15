import React, { useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import { IMAGE_PATH, VIDEO_PATH, handleErrorFile } from '../datas/Const'

export default function Element(props) {
  const [load, setLoad] = useState(false)

  const handleLoad = () => {
    setLoad(true) // Triggered when the image or video has loaded
  }

  if (props.url.startsWith(IMAGE_PATH)) {
    return (
      <>
        {/* Skeleton is displayed while loading */}
        {!load && (
          <Skeleton
            variant="rectangular"
            style={{ position: 'absolute' }}
          className='customImgVideoSizeEtc'
          />
        )}
        {/* Image is hidden until loaded */}
        <img
          alt={props.name}
          src={props.url}
          style={{
            objectFit: 'fill',
            display: load ? 'block' : 'none',
          }}
          className='customImgVideoSizeEtc'
          onError={(e) => {
            handleErrorFile(e)
          }}
          onLoad={handleLoad}
        />
      </>
    )
  } else if (props.url.startsWith(VIDEO_PATH)) {
    return (
      <>
        {/* Skeleton is displayed while loading */}
        {!load && (
          <Skeleton
            variant="rectangular"
            style={{
                display: load ? 'none' : 'block',
            }}
          className='customImgVideoSizeEtc'
          />
        )}
        {/* Video is hidden until loaded */}
        <video
          src={props.url}
          alt={props.name}
          muted
          controls
          style={{
            objectFit: 'contain',
            display: load ? 'block' : 'none',
          }}
          className='customImgVideoSizeEtc'
          onError={(e) => {
            handleErrorFile(e)
          }}
          onLoadedData={handleLoad}
        />
      </>
    )
  }

  return null
}
