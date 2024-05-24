import Button from "@/components/UI/button";
import { IProductProps } from "@/interfaces/IProduct";
import Image from "next/image";
import React, { memo } from "react";
import arrow from "../assets/icons/arrow.svg";
const ProductItem: React.FC<IProductProps> = ({
  title,
  image,
  description,
}) => {
  return (
    <>
      <div className="product-card">
        <div className="product-card-left">
          <h3>{title}</h3>
          <p>{description}</p>
          <Button className="product-btn">
            <Image width={24} height={24} src={arrow} alt="arrow-icon" />
            <span>Start a Repair</span>
          </Button>
        </div>
        <div>
          <Image width={608} height={576} src={image} alt={title} />
        </div>
      </div>
    </>
  );
};

export default ProductItem;
