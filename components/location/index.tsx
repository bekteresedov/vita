"use client";
import { locationList } from "@/constants/location";
import { useState } from "react";
import LocationCard from "../location-card";

const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: -37.816279,
    lng: 144.964873,
  });

  const handleLocationClick = (lat: number, lng: number) => {
    setSelectedLocation({ lat, lng });
  };

  return (
    <>
      <div className="locations-container container">
        <h1>Locations</h1>
        <p>
          Say hello to our friendly and professional team at one of these
          locations.
        </p>
        <ul className="location-cards">
          {locationList.map((location, index) => (
            <li key={index + location.address}>
              <LocationCard
                city={location.city}
                address={location.address}
                phone={location.phone}
                onClick={() => handleLocationClick(location.lat, location.lng)}
              />
            </li>
          ))}
        </ul>
        <div>
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBh3zGUICcVEbGXzFHlqbIK4DS-IUbC-Q0&q=${selectedLocation.lat},${selectedLocation.lng}`}
            width="100%"
            height="450"
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Location;
