"use client";
import { blogList } from "@/constants/blog";
import Button from "@/components/UI/button";
import next from "../assets/icons/next.svg";
import back from "../assets/icons/back.svg";
import Image from "next/image";
import { useState } from "react";
import { testimonialList } from "@/constants/testimonial";
import TestimonialItem from "../testimonial-item";
const TestimonialList = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : blogList.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < blogList.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <div className="testimonial">
        <div className="testimonial-head">
          <div>
            <h2>Don’t just take our word for it</h2>
            <p>
              Hear from some of our amazing customers who are building faster.
            </p>
          </div>

          <div className="btn-testimonial-container">
            <Button className="btn-testimonial back" onClick={handlePrev}>
              <Image width={20} height={20} src={back} alt="back icon" />
            </Button>
            <Button className="btn-testimonial next" onClick={handleNext}>
              <Image width={20} height={20} src={next} alt="next icon" />
            </Button>
          </div>
        </div>
        <div>
          <ul className="testimonial-cards">
            {testimonialList.slice(currentIndex).map((test) => (
              <li className="test-card" key={test.id}>
                <TestimonialItem {...test} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default TestimonialList;
