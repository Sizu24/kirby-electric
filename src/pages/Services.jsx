import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import SubpageHero from "../components/SubpageHero";

function Services() {
  return (
    <>
      <Header colorMode={"dark"}/>
      <div className="subpage">
        <SubpageHero title={"Services"} subhead={"Subhead"} image={"kirby-electric/assets/images/AdobeStock_222475670_Preview.jpeg"} />
        <div className={"subpage-container container"}>
        <h2 className="subpage__title">Title</h2>
        <p className="subpage__subhead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel orci porta non pulvinar neque laoreet. Bibendum at varius vel pharetra.</p>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
