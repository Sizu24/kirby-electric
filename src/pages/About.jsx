import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import SubpageHero from "../components/SubpageHero";
import SubpageHeading from "../components/SubpageHeading";

function Services() {
  return (
    <>
      <Header colorMode={"dark"}/>
      <div className="subpage">
        <SubpageHero title={"About Us"} subhead={"Subhead"} image={"../src/assets/images/AdobeStock_222475670_Preview.jpeg"} />
        <SubpageHeading title={"Title"} subhead={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel orci porta non pulvinar neque laoreet. Bibendum at varius vel pharetra."} />
      </div>
      <Footer />
    </>
  );
}

export default Services;
