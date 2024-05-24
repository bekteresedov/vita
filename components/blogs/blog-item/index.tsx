import { IBlogItemProps } from "@/interfaces/IBlog";
import Image from "next/image";
import { FC } from "react";
import arrow from "../assets/icons/arrow.svg";
const BlogItem: FC<IBlogItemProps> = ({
  title,
  description,
  category,
  readTime,
  date,
  image,
}) => {
  return (
    <>
      <div>
        <Image className="blog-image" src={image} alt={title} />
        <div className="blog-content">
          <div>
            <span className="blog-category">{category}</span>
            <span className="blog-read">{readTime}</span>
          </div>
          <h2>
            {title}
            <Image src={arrow} alt="arrow icon" width={24} height={24} />
          </h2>
          <p>{description}</p>
          <span className="blog-date">{date}</span>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
