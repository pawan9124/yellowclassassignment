import React from "react";
import "./style.css";

import ImageCard from "../ImageCard";
/* Creaet the mansoryboard */
function MansoryDashboard(props) {
  const imageCards = props.images.map((image, index) => (
    <ImageCard image={image} imageList={props.images} currentIndex={index} />
  ));
  return <div className="dashboard_container">{imageCards}</div>;
}

export default MansoryDashboard;
