import phoneIcon from "@/assets/icons/category/phone.svg"
import tabletIcon from "@/assets/icons/category/tablet.svg"
import gameIcon from "@/assets/icons/category/game-console.svg"
import lapTopIcon from "@/assets/icons/category/laptop.svg"
import smartIcon from "@/assets/icons/category/smart-watch.svg"
import phoneImg from "@/assets/images/hero-section/phone.svg"
import tabletImg from "@/assets/images/hero-section/tablet.svg"
import laptopImg from "@/assets/images/hero-section/laptop.jpg"
import smartImg from "@/assets/images/hero-section/smart.jpg"
import gameImg from "@/assets/images/hero-section/game.jpg"

import { ICategory } from "@/interfaces/ICategory"

export const categoryList: ICategory[] = [
    {
        title: "Phones",
        icon: phoneIcon,
        image: phoneImg
    },
    {
        title: "Tablets",
        icon: tabletIcon,
        image: tabletImg
    },
    {
        title: "Laptop",
        icon: lapTopIcon,
        image: laptopImg
    },
    {
        title: "Smartwatch",
        icon: smartIcon,
        image: smartImg
    },
    {
        title: "Game Console",
        icon: gameIcon,
        image: gameImg
    }
]