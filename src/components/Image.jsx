import React from 'react'

const Image = ({src, alt, style}) => {
  return (
    // STYLE prop instead of style because that allows me to pass in CSS as string
    <img src={src} alt={alt} style={style}/>
  )
}

export default Image