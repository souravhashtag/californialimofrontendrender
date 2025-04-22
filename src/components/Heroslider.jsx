"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import $ from "jquery"; 
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const Heroslider = ({sliderData}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = $;
    }
  }, []);

  

  return (
    <>
      {/* {console.log("sliderData===>",sliderData)} */}
      <div className="hero-banner">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          autoplay={true}
          items={1}
          animateOut="fadeOut"
          animateIn="fadeIn"
        >
          {sliderData?.map((item,index) => (
            
            <div className="item" key={index}>
              <img src={process?.env?.NEXT_PUBLIC_IMG_FOLDER+item?.value?.slider} alt={item?.value?.sliderheader} />
              <div className="carousel-caption">
                <h3>{item?.value?.sliderheader}</h3>
                <p>{item?.value?.bannercontent}</p>
                {item?.value?.bnrbtnnm !== ""?
                  <Link href={item?.value?.bnrbtnlink} className="bookbtn">
                    {item?.value?.bnrbtnnm}
                  </Link>
                :""
                }
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
};

export default Heroslider;
