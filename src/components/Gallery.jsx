"use client"

import React,{useEffect} from 'react'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Gallery = ({galleryData}) => {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
          Thumbs: { autoStart: true },
        });
    
        return () => {
          Fancybox.destroy();
        };
      }, []);
  return (
    <>
      <section className="content-section no-bottom-spacing">
          <div className="container">
            <div className="row">
              <div className="col-12 wow fadeIn">
                <div className="section-title">
                  <h6>Today's Special</h6>
                  <h2>Photo Gallery</h2>
                  <h5>
                    {galleryData?.content}
                  </h5>
                  <img
                    src="../assets/images/title-shape.png"
                    alt="Image"
                    className="title-shape"
                  />
                </div>
              </div>
              <div className="col-12 wow fadeIn">
                {galleryData?.images.length>0 ?
                <ul className="photo-gallery">
                  {galleryData?.images?.map((val,index)=>(
                    <li key={index}>
                      <figure>
                        <a href={process?.env?.NEXT_PUBLIC_IMG_FOLDER+val.image} data-fancybox="gallery" data-caption={`Image ${index+1}`}>
                          <img src={process?.env?.NEXT_PUBLIC_IMG_FOLDER+val.image} alt="Image" />
                        </a>
                      </figure>
                    </li>
                  ))
                }
                </ul>
                :""
                }
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Gallery