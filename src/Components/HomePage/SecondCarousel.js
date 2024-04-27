import React from "react";

const SecondCarousel = () => {
  const slider1 = "https://www.deshal.net/noya/1.webp";
  const slider2 = "https://www.deshal.net/noya/4.webp";
  const slider3 = "https://www.deshal.net/noya/3.webp";

  return (
    <div className="carousel w-full">
      <div id="slide2.1" className="carousel-item relative w-full">
        <div
          style={{
            backgroundImage: `url(${slider1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="mx-2 mb-2 h-[460px] w-full lg:h-[600px] flex items-end justify-center"
        >
          <div className="flex flex-col items-center">
            {/* <h1 className=" mb-5 text-white font-bold text-5xl">HOME DECOR</h1> */}
            <div className="cursor-pointer mb-5 h-[50px] w-[200px] bg-[#9B101F] hover:bg-red-700 text-white flex items-center justify-center">
              VIEW PRODUCTS
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2.3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2.2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2.2" className="carousel-item relative w-full">
        <div
          style={{
            backgroundImage: `url(${slider2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="mx-2 mb-2 h-[460px] w-full lg:h-[600px] flex items-end justify-center"
        >
          <div className="flex flex-col items-center">
            {/* <h1 className=" mb-5 text-white font-bold text-5xl">HOME DECOR</h1> */}
            <div className="cursor-pointer mb-5 h-[50px] w-[200px] bg-[#9B101F] hover:bg-red-700 text-white flex items-center justify-center">
              VIEW PRODUCTS
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2.1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2.3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2.3" className="carousel-item relative w-full">
        <div
          style={{
            backgroundImage: `url(${slider3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="mx-2 mb-2 h-[460px] w-full lg:h-[600px] flex items-end justify-center"
        >
          <div className="flex flex-col items-center">
            {/* <h1 className=" mb-5 text-white font-bold text-5xl">HOME DECOR</h1> */}
            <div className="cursor-pointer mb-5 h-[50px] w-[200px] bg-[#9B101F] hover:bg-red-700 text-white flex items-center justify-center">
              VIEW PRODUCTS
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2.2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2.1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecondCarousel;
