import { StaticImageData } from "next/image";

interface IProductBase {
    title: string;
    image: StaticImageData;
    description: string;
}

export interface IProductProps extends IProductBase {

}

export interface IProduct extends IProductBase {

}