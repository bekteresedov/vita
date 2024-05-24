import Contact from "@/components/contact";
import Location from "@/components/location";
import React from "react";
import "./assets/styles/style.scss";
const LocationContainer = () => {
  return (
    <>
      <div className="location-container container">
        <section>
          <Location />
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </>
  );
};

export default LocationContainer;
