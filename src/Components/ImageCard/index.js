import React, { useState } from "react";
import ImageModal from "../ImageModal";
import "./style.css";

function ImageCard(props) {
  const [modalToggle, setModalToggle] = useState(false);

  const handleModalToggle = (e, currentValue) => {
    e.preventDefault();
    setModalToggle(currentValue);
  };
  return (
    <div>
      <img
        alt={props.image.thumb}
        className="item image-card"
        src={props.image.thumb}
        onClick={(e) => handleModalToggle(e, true)}
      />
      {modalToggle && (
        <ImageModal
          imageList={props.imageList}
          currentIndex={props.currentIndex}
          currentPropsImage={props.image}
          handleModalToggle={handleModalToggle}
        />
      )}
    </div>
  );
}

export default ImageCard;
