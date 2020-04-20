import React from 'react';
import './App.css';

import Image from "./components/image";

const App = () => {
  let total_image = 50;

  const getImage = () => {
    let images = [];

    for(let i=0; i<total_image; i++) {
      const width = 200;
      const height = 300;
      const src = `https://picsum.photos/id/${i}/${width}/${height}`;

      images.push(<Image src={src} width={width} height={height} key={i}/>);
    }

    return images;
  }
  return (
    <div>
      {getImage()}
    </div>
  );
}

export default App;
