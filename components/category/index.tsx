import Button from "@/components/UI/button";
import { ICategoryProps } from "@/interfaces/ICategory";
import Image from "next/image";
import { memo } from "react";

const Category: React.FC<ICategoryProps> = ({ title, icon, onClick }) => {
  return (
    <>
      <Button className="category-card" onClick={() => onClick({ title })}>
        {icon && (
          <Image width={56} height={56} src={icon} alt={`${title} icon`} />
        )}
        {title}
      </Button>
    </>
  );
};

export default Category;
