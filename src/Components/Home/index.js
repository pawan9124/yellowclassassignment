import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import "./style.css";

import MansoryDashboard from "../MansoryDashboard";

function Home() {
  const [images, setImages] = useState([]);

  const getPhotosList = async (count = 15) => {
    let photoList = await axios.get(
      `https://api.unsplash.com/photos/?client_id=3Ya48sMFrS1On5pBIllGKsUF0sIDua0NVTxXKXhlYSY&count=${count}`
    );
    console.log("photosList", photoList);
    const photoListMap = photoList.data.map((x) => x.urls);
    if (photoListMap.length > 0) {
      setImages([...images, ...photoListMap]);
    }
  };

  /* Fetch the photos from the api */
  useEffect(() => {
    getPhotosList();
  }, []);
  return (
    <div>
      <h1 className="heading">Yellow Class</h1>
      <div className="layout_container">
        <div className="side_left"></div>
        <div className="side_center">
          <InfiniteScroll
            pageStart={0}
            loadMore={() => getPhotosList(5)}
            hasMore={true}
            loader={
              <img
                src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                alt="loading"
              />
            }
          >
            <MansoryDashboard images={images} />
          </InfiniteScroll>
        </div>
        <div className="side_right"></div>
      </div>
    </div>
  );
}

export default Home;
