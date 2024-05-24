import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin", "latin-ext"],
    display: "swap",
    fallback: ["Arial", "sans-serif"],
    preload: true,
});

export default poppins