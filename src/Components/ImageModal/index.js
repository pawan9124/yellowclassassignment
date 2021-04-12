import React, { useEffect, useState } from "react";
import "./style.css";

function ImageModal(props) {
  const [currentImage, setCurrentImage] = useState([]);
  const [imageIndexMapObject, setImageMapObject] = useState({});
  const [currentPointer, setCurrentPointer] = useState(props.currentIndex);
  useEffect(() => {
    props.imageList.map((mappedData, index) => {
      //creating the imageIndexMapObject for better changing at image changes through arrow
      if (!imageIndexMapObject[index]) {
        imageIndexMapObject[index] = mappedData;
      }
    });
    setCurrentImage(props.currentPropsImage);
    setImageMapObject(imageIndexMapObject);
  }, [props.currentIndex]);

  const handleImageChanges = (nav) => {
    let currentIndex = parseInt(currentPointer);
    let currentImageDetails = {};

    if (nav === "next") {
      currentIndex += 1;
    } else {
      currentIndex -= 1;
    }
    if (currentIndex > -1 && currentIndex <= props.imageList.length - 1) {
      currentImageDetails = imageIndexMapObject[currentIndex];
    } else if (currentIndex === -1) {
      currentIndex = props.imageList.length - 1;
      currentImageDetails = imageIndexMapObject[currentIndex];
    } else if (currentIndex === props.imageList.length) {
      currentIndex = 0;
      currentImageDetails = imageIndexMapObject[currentIndex];
    }
    setCurrentImage(currentImageDetails);
    setCurrentPointer(currentIndex);
  };
  return (
    <div>
      <div id="myModal" className={`modal  `}>
        <div className={`modal-content showModal`}>
          <div
            className="close"
            onClick={(e) => props.handleModalToggle(e, false)}
          >
            &times;
          </div>
          <div className="modal_body">
            <div
              className="modal_arrow_left"
              onClick={(e) => handleImageChanges("prev")}
            >
              <span>
                <img
                  src={
                    require(__dirname + "/../../images/left_arrow.png").default
                  }
                  alt="arrow_left"
                />
              </span>
            </div>
            <div className="modal_image">
              <div className="modal_image_container">
                <img src={currentImage.small} alt="arrow_left" />
              </div>
            </div>
            <div
              className="modal_arrow_right"
              onClick={(e) => handleImageChanges("next")}
            >
              <span>
                <img
                  src={
                    require(__dirname + "/../../images/right_arrow.png").default
                  }
                  alt="arrow_right"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
