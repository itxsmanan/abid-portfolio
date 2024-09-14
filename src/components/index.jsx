import React from "react";
import Header from "./header";
import HeroSection from "./heroSection";
import Footer from "./footer";
import Preloader from "./preloader";
function index() {
  return (
    <div>
      {/* <Preloader /> */}
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default index;
