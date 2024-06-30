import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import React from "react";
import Feed from "@/components/Feed";
export default function page() {
  return (
    <div className="dark:bg-black bg-white">
      <Hero />

      <div className="">
        <Feed />
      </div>

      <Footer />
    </div>
  );
}
