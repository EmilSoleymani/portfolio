import React from 'react'
import { getCorrectUrl } from '../globals';

const Image = ({src, alt, style}) => {
  return (
    // STYLE prop instead of style because that allows me to pass in CSS as string
    <img src={getCorrectUrl(src)} alt={alt} style={style}/>
  )
}

export default Image