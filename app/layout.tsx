import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Footer from "@/components/layout/footer";
import "../assets/styles/main.scss";
import poppins from "@/public/fonts/poppins";
import Header from "@/components/layout/header";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}