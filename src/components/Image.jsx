import { IKImage } from "imagekitio-react";
import React from "react";

const Image = ({ src, className, alt, w, h }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      className={className}
      width={w}
      height={h}
    />
  );
};

export default Image;
