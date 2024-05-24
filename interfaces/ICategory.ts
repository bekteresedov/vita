import { StaticImageData } from "next/image";

interface ICategoryBase {
    title: string;
    icon: StaticImageData;
}

export interface ICategory extends ICategoryBase {
    image: StaticImageData
}

export interface ICategoryProps extends ICategoryBase {
    onClick: (category: { title: string; }) => void;
}