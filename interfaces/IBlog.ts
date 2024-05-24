import { StaticImageData } from "next/image";

interface IBase {
    title: string;
    description: string;
    category: string;
    readTime: string;
    date: string;
    image: StaticImageData;

}

export interface IBlog extends IBase {
    id: number
}


export interface IBlogItemProps extends IBase {

}