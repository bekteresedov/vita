// components/LocationCard.tsx
import React from "react";
import Button from "../UI/button";
import { ILocationCardProps } from "@/interfaces/ILocation";

const LocationCard: React.FC<ILocationCardProps> = ({
  city,
  address,
  phone,
  onClick,
}) => {
  return (
    <>
      <div className="location-card" onClick={onClick}>
        <h3>{city}</h3>
        <p>{address}</p>
        <span>{phone}</span>
        <Button className="btn-location">Start a Repair</Button>
      </div>
    </>
  );
};

export default LocationCard;
