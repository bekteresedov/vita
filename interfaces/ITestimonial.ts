import { StaticImageData } from "next/image";

interface ITestimonialBase {
    id: number
    name: string;
    title: string;
    image: StaticImageData;
    feedback: string;
    rating: number;
}

export interface ITestimonialProps extends ITestimonialBase {
    active?: boolean;
}

export interface ITestimonial extends ITestimonialBase {
}