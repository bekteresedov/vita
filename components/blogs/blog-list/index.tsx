"use client";
import { blogList } from "@/constants/blog";
import BlogItem from "../blog-item";
import Button from "@/components/UI/button";
import next from "../assets/icons/next.svg";
import back from "../assets/icons/back.svg";
import Image from "next/image";

// import "../assets/style/style.scss";

import { useState } from "react";


const BlogList = () => {
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
    console.log("okertr");
  };

  return (
    <>
      <div className="blogs">
        <div className="blog-head">
          <div>
            <h2>Blogs</h2>
            <p>Everything about electronic devices.</p>
          </div>

          <div className="btn-blog-container">
            <Button className="btn-blog back" onClick={handlePrev}>
              <Image width={20} height={20} src={back} alt="back icon" />
            </Button>
            <Button className="btn-blog next" onClick={handleNext}>
              <Image width={20} height={20} src={next} alt="next icon" />
            </Button>
          </div>
        </div>
        <div>
          <ul className="blog-cards">
            {blogList.slice(currentIndex).map((blog) => (
              <li className="blog-card" key={blog.id}>
                <BlogItem
                  title={blog.title}
                  description={blog.description}
                  category={blog.category}
                  readTime={blog.readTime}
                  date={blog.date}
                  image={blog.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default BlogList;
