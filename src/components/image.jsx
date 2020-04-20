import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Image = (props) => {
  let {src, width, height, alt} = props;

  return (
    <LazyLoadImage
    alt={alt}
    height={height}
    src={src} 
    width={width} />
  );
}

export default Image;
