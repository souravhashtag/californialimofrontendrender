"use client"

import React,{useEffect,useState} from "react";

import Image from "next/image";
import Link from "next/link";
import Heroslider from "@/components/Heroslider";
import IframeForm from "@/components/IframeForm";
import OurTours from "@/components/OurTours";
import OurVehicles from "@/components/OurVehicles";
import Gallery from "@/components/Gallery";
import {pageData} from "../config/api"
//import {metadata} from "@/components/includes/MetaFile";
export default function Home({page}) {  
  return (
    <>     
      <Heroslider sliderData={page?.pagedata?.sliderdata} />
      <IframeForm />
      {
        page?.pagedata?.aboutus !=="" ?
          <section
            className="content-section"
            style={{
              backgroundColor: "rgb(245, 241, 234)",
              backgroundImage: 'url("#f5f1ea")',
            }}
            data-background="#f5f1ea"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 wow fadeIn">
                  <div className="side-content">
                    <h6>{page?.pagedata?.aboutus?.header}</h6>
                    <h3>{page?.pagedata?.aboutus?.secondheader}</h3>
                    <p>
                      {page?.pagedata?.aboutus?.content}
                    </p>
                    {page?.pagedata?.aboutus?.btnname !==""?
                      <a href={page?.pagedata?.aboutus?.btnlink} className="custom-button">
                        {page?.pagedata?.aboutus?.btnname}
                      </a>
                    :""
                    } 
                    {" "}
                  </div>
                </div>
                {page?.pagedata?.aboutus?.image!=""?
                  <div className="col-lg-6  wow fadeIn" data-wow-delay="0.15s">
                    <img src={process?.env?.NEXT_PUBLIC_IMG_FOLDER+page?.pagedata?.aboutus?.image} width="100%" />
                  </div>
                  :""
                }
              </div>
            </div>
          </section>
        :""
      }
      <OurTours ourTour={page?.pagedata?.ourtour} />
      <OurVehicles vehicleData={page?.pagedata?.ourvehicles} />
      <div
        className=""
        style={{
          "paddingLeft": "0px",
          "backgroundImage": "url(../assets/images/page-header-bg.jpg)",
        }}
      >
        <div className="widgetsd">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="content">
                  <h6>California Limo Wine Tour</h6>
                  <p>
                    Discover the art of fine wine and luxury travel on our
                    California limo wine tour – where the only thing poured more
                    generously than the wine is elegance.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="content">
                  <a
                    href="https://scwebext-c.groundwidgets.com/US.CA.ECK/Webconnect/Ecko/Account/Login?AspxAutoDetectCookieSupport=1"
                    className="custom-button"
                  >
                    Book Now
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gallery galleryData={page.pagedata?.photogallary} />
    </>
  );
}
