"use client";
import React, { memo, useState } from "react";
import styles from "../styles/HeroSection.module.css";
import Image from "next/image";
import Category from "../category";
import img from "@/assets/images/hero-section/phone.svg";
import icon from "@/assets/icons/category/laptop.svg";
import { categoryList } from "@/constants/category";
import { ICategory } from "@/interfaces/ICategory";
import Button from "../UI/button";

import toolIcon from "./assets/icons/tool.svg";

const HeroSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    categoryList[0]
  );

  return (
    <>
      <div className="hero-section">
        <div>
          <h1>Instant and Reliable Electronics Repair Near You!</h1>
          <Button className="tool-btn">
            <Image src={toolIcon} alt="tool-icon" />
            <span>Start a Repair</span>
          </Button>
        </div>

        <div>
          <Image
            width={671}
            height={534}
            src={selectedCategory.image}
            alt={selectedCategory.title}
          />
        </div>
      </div>
      <div className="cards">
        <ul className="category-cards container">
          {categoryList.map((category) => (
            <li key={category.title}>
              <Category
                title={category.title}
                icon={category.icon}
                onClick={() => setSelectedCategory(category)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HeroSection;
