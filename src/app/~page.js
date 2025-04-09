"use client"

import React,{useEffect,useState} from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Heroslider from "@/components/Heroslider";
import IframeForm from "@/components/IframeForm";
import OurTours from "@/components/OurTours";
import OurVehicles from "@/components/OurVehicles";
import Gallery from "@/components/Gallery";
import {pageData} from "../config/api"
//import {metadata} from "@/components/includes/MetaFile";
export default function Home() {
  const [getScroll,setScrollUp]=useState(false);
  const homepageData = async () =>{
    try{
        let response = await pageData('home');
        console.log(response)
    }catch(err){
      console.log(err)
    }
    
  }
  useEffect(()=>{
    homepageData()
    document.title = "Home";
  },[])
  // useEffect(()=>{
  //   setInterval(()=>{
  //     //if(getScroll){
  //       //window.scrollTo({ top: 0, behavior: "smooth" });
  //       //setScrollUp(false)
  //       window.location.href="/about"
  //     //}else{
  //       //window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  //       //setScrollUp(true)
  //     //}
  //   },10000)
  // })
  return (
    <>
      <Head>
        <meta name="description" content="Home" />
      </Head>
      <Heroslider />
      <IframeForm />
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
                <h6>California Limo Wine Tour</h6>
                <h3>Northern California’s Premium Wine Tour Company</h3>
                <p>
                  The core philosophy of team Californialimowinetours is all
                  about delivering exclusivity and comfort to our valuable
                  clients by gifting a memorable wine tour California’s Niagara
                  Wine Country. To accomplish this objective, we have very
                  strategically designed some of the best "private", educational
                  and interactive wine &amp; culinary tour services in Niagara
                  Wine Country in the comfort of a luxury SUV, Mercedes or
                  stretch limousine. In every step of our services, flawlessness
                  is guaranteed.
                </p>
                <a href="#" className="custom-button">
                  ABOUT US
                </a>{" "}
              </div>
            </div>
            <div className="col-lg-6  wow fadeIn" data-wow-delay="0.15s">
              <img src="../assets/images/menu-pack-thumb12.png" width="100%" />
            </div>
          </div>
        </div>
      </section>
      <OurTours />
      <OurVehicles />
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
      <Gallery />
    </>
  );
}
