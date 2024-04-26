import React from 'react';
import slide1 from "../../assets/slide1.webp"
import slide2 from "../../assets/slide2.webp"
import slide3 from "../../assets/slide3.webp"
import { Link } from 'react-router-dom';


const MyCarouselSlider = () => {
    return (
        
      <div className="carousel w-full h-3/4">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={slide1}
          className="w-full"
          alt="image1"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link to="" href="#slide3" className="btn btn-circle">
            ❮
          </Link>
          <Link to="" href="#slide2" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={slide2}
          className="w-full"
          alt="image2"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link to="" href="#slide1" className="btn btn-circle">
            ❮
          </Link>
          <Link to="" href="#slide3" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={slide3}
          className="w-full"
          alt="image3"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link to="" href="#slide2" className="btn btn-circle">
            ❮
          </Link>
          <Link to="" href="#slide1" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
    </div>
    );
};

export default MyCarouselSlider;