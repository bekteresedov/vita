import { ITestimonialProps } from "@/interfaces/ITestimonial";
import Image from "next/image";
import star from "../assets/icons/star.svg";
import { memo } from "react";
const TestimonialItem: React.FC<ITestimonialProps> = ({
  name,
  title,
  image,
  feedback,
  rating,
  active,
}) => {
  return (
    <>
      <div className="testimonial-card">
        <div>
          <Image width={92} height={92} src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <h4>{title}</h4>
        <div className="star">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <Image
                width={20}
                height={20}
                key={i}
                alt="star icon"
                src={star}
              />
            ))}
        </div>
        <p>{feedback}</p>
      </div>
    </>
  );
};

export default memo(TestimonialItem);
