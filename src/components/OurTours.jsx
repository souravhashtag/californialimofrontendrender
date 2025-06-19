"use client";
import { useState, useEffect } from "react";

export default function OurTours({ourTour}) {
  return (
    <>
      {/* {console.log("ourtour",ourtour)} */}
      <section
        className="content-section no-btm-space"
        data-background="#f5f1ea"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 wow fadeIn">
              <div className="section-title">
                <h6>{ourTour?.header}</h6>
                <h2>Our Tours</h2>
                <h5>
                {ourTour?.content}
                </h5>
                <img
                  src="../assets/images/title-shape.png"
                  alt="Image"
                  className="title-shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section no-spacing">
        <div className="container-fluid">
          <div className="row justify-content-center">
          {ourTour?.ourtourdata ?
            ourTour?.ourtourdata?.map((val,index)=>(
              <div className="col-lg-4 col-md-6 wow fadeIn" key={index}>
                <a href={`/${(val.slug=="" || val.slug==="#" ?  "#":val.slug)}`}>
                  <div className="menu-pack-box">
                    <figure>
                      {" "}
                      <img
                        src={process?.env?.NEXT_PUBLIC_IMG_FOLDER+val.image}
                        alt="Image"
                      />{" "}
                    </figure>
                    <div className="content">
                      <h5>{val.header}</h5>
                      <ul>
                        <li>
                        {val.content}
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            ))
          :""           
          }  
          </div>
        </div>
      </section>
      
    </>
  );
}
