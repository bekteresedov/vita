import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import HeroSection from "@/components/hero-section";
import ProductList from "@/components/products/product-list";
import React from "react";
import "./assets/styles/style.scss";
import BlogList from "@/components/blogs/blog-list";
import TestimonialList from "@/components/testimonials/testimonial-list";
const HomeContainer = () => {
  return (
    <>
      <div className="container">
        <section>
          <HeroSection />
        </section>
        <section>
          <ProductList />
        </section>
        <section>
          <Features />
        </section>
        <section>
          <TestimonialList />
        </section>
        <section>
          <FAQ />
        </section>
        <section>
          <BlogList />
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </>
  );
};

export default HomeContainer;
