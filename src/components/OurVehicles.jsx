"use client"
import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams,useParams  } from "next/navigation";
import vehiclesData from "../../public/assets/Data/vehiclesData";

const Ourvehicles = ({vehicleData}) => {
  const pathname = usePathname();
  const params = useParams();
  // console.log("params",params)
  let slug = params?.slug;
  if (!slug) {
    slug = "sedan";
  }
  const currentTab = pathname
  const [activeTab, setActiveTab] = useState(slug);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    setVehicles(vehiclesData.vehicles);
  }, []);

  // useEffect(() => {
  //   if (vehicles.length > 0) {
  //     const validTab = vehicles.find((vehicle) => vehicle.id === currentTab)
  //       ? currentTab
  //       : "sprinters";
  //     setActiveTab(validTab);
  //   }
  // }, [currentTab, vehicles]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = (vehicle) => {
    return vehicle?.map((item, index) => (
      <div
        key={index}
        className="zigzag__item zigzag--align-items-center zigzag--vw600-float zigzag--vw200-flex"
      >
        <div className="zigzag__image">
          <img
            src={process?.env?.NEXT_PUBLIC_IMG_FOLDER+item.image}
            loading="lazy"
            alt=""
            width={683}
            height={460}
          />
        </div>
        <div className="zigzag__text">
          <h2>{item.header}</h2>
          <p>{item.content}</p>
          <span>{item.passengercount}</span>
        </div>
      </div>
    ));
  };

  return (
    <section
      className="content-section bg-contain"
      data-background="images/section-bg02.jpg"
      data-stellar-background-ratio="1.1"
      style={{ padding: "40px 0px 0px 0px" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 wow fadeIn">
            <div className="section-title">
              <h2>Our Vehicles</h2>
              <img
                src="../assets/images/title-shape.png"
                alt="Image"
                className="title-shape"
              />
              <div className="container mt-5 our_vch">
                <ul className="nav nav-tabs" role="tablist">
                  {vehicleData?.slice().reverse().map((vehicle,index) => (
                    <li
                      className="nav-item"
                      role="presentation"
                      key={index}
                    >
                      <button
                        className={`nav-link ${
                          activeTab === vehicle?.vehicleslug ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(vehicle?.vehicleslug)}
                        type="button"
                        role="tab"
                      >
                        {vehicle?.vehicletype}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="tab-content mt-3">
                  {vehicleData?.slice().reverse()?.map((val,index) => (
                    <div
                      key={`content-${index}`}
                      className={`tab-pane fade ${
                        activeTab === val?.vehicleslug ? "show active" : ""
                      }`}
                      role="tabpanel"
                    >
                      <section className="content width-df | zigzag zigzag--vw200-alt-bg-color">
                        {renderContent(val.vehicledata?.slice().reverse())}
                      </section>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourvehicles;
