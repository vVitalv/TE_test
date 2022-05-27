import { useState } from "react";

const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt, content }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  const returnElement = () => {
    if (imgSrc) return <img src={imgSrc} alt={imgAlt} />;
    if (content) return <p>BLock2 content: {content}</p>;
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {returnElement}
    </div>
  );
};
