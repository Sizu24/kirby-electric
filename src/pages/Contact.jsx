import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import SubpageHero from "../components/SubpageHero";
import Form from "../components/Form";

function Services() {
  return (
    <>
      <Header colorMode={"dark"}/>
      <div className="subpage">
        <SubpageHero title={"Contact Us"} subhead={"Subhead"} image={"/kirby-electric/assets/images/AdobeStock_222475670_Preview.jpeg"} />
        <div className={"subpage-container container"}>
          <h2 className="subpage__title">Have any questions, or want to book an appointment?</h2>
          <p className="subpage__subhead">Send us a message, and we will get back to you as soon as possible!</p>
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
