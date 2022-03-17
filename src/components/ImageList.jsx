import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image, i) => (
    <img src={image.webformatURL} alt="item" key={image.id} />
  ));
  return <>{images}</>;
};

export default ImageList;
