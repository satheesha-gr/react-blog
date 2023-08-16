import React from 'react'
import '../../App.css'
import myGif from '../Images/original-ceb0d62f7ef7498e4e4373095b75ea55.mp4'

const Advertisement = () => {
  return (
    <div className='Ad'>
        <video
          style={{ width: "100%" }} 
          src={myGif}
          autoPlay
          loop
          muted
          controls
          alt="Your vedio doesn't support"
        />
    </div>
  )
}

export default Advertisement
