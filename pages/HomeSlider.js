import React from "react";
import { headerItems } from "../public/productsData";
import Banner1 from "../public/Banner1.jpg";
import Banner2 from "../public/Banner2.jpg";
import Banner3 from "../public/Banner3.jpg";
import Banner4 from "../public/Banner4.jpg";
import Banner5 from "../public/Banner5.jpg";
import Banner6 from "../public/Banner6.jpg";
import Slider from "../components/Slider";

const HomeSlider = () => {
  const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
  return (
    <>
      <div className="item-container">
        {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
      </div>
      <div className="home">
        <div className="home-container">
          <Slider images={bannerImages} />
          <div className="home-container">{/* products */}</div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
