// components/FleetCom.jsx
import OurVehicles from "@/components/OurVehicles";

export default function FleetCom({ pageresponse }) {
  console.log(pageresponse)
  return (    
    <div>        
      <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
          <h1>Our Vehicles</h1>
        </div>
      </header>
      <OurVehicles vehicleData={pageresponse?.page?.pagedata?.ourvehicles} />
    </div>
  );
}