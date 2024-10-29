import React from 'react'

const Image = ({src, alt, styles}) => {
  return (
    // STYLE prop instead of style because that allows me to pass in CSS as string
    <img src={src} alt={alt} STYLE={styles}/>
  )
}

export default Image