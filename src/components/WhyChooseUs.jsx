import React from 'react';
import TextMedia from './TextMedia';

export default function WhyChooseUs() {

  const contentOne = {
    image: "kirby-electric/assets/images/worker.png",
    title: "Experience and Expertise",
    body: ["With a wealth of experience in the electrical industry, our team brings extensive knowledge and expertise to every project.",
    "We have successfully handled a wide range of electrical jobs, from residential to commercial, ensuring that our customers receive top-notch service and solutions tailored to their specific needs."],
  }

  const contentTwo = {
    image: "kirby-electric/assets/images/licensed.png",
    title: "Licensed and Certified Electricians",
    body: ["Our team comprises licensed and certified electricians who have undergone rigorous training and possess the necessary qualifications to handle electrical tasks with precision and professionalism.",
    "You can trust that our experts are up-to-date with the latest industry standards and regulations, ensuring the highest level of quality and safety in all our services."],
  }

  const contentThree = {
    image: "kirby-electric/assets/images/safety.png",
    title: "Commitment to Safety",
    body: ["Safety is our utmost priority in every project we undertake. We follow strict safety protocols and adhere to industry best practices to ensure the well-being of our clients, our team, and the surrounding environment.",
    "You can have peace of mind knowing that we prioritize safety in every aspect of our work."],
  }

  const contentFour = {
    image: "kirby-electric/assets/images/pricing.png",
    title: "Competitive Pricing",
    body: ["We believe that quality electrical services should be accessible and affordable. That's why we offer competitive pricing without compromising on the excellence of our work.",
    " We provide transparent and detailed quotes, so you know exactly what to expect and can make informed decisions about your electrical needs."],
  }

  const contentFive = {
    image: "kirby-electric/assets/images/satisfaction.png",
    title: "Customer Satisfaction",
    body: ["Your satisfaction is at the heart of our business. We are dedicated to providing exceptional customer service and ensuring that every customer's unique requirements are met.",
    "From the initial consultation to the completion of the project, we strive to exceed your expectations and ensure a seamless and enjoyable experience."],
  }

  return (
    <div className="why-choose-us curve-blue plug-left">
      <div className="section-container">
        <h2 className="section__title">Why Choose Us?</h2>
        <p className="section__subhead">Meeting All Your Electrical Needs with Expertise and Precision</p>
        <TextMedia accent={"wires"} flipped={false} image={contentOne.image} title={contentOne.title} paragraphs={contentOne.body} />
        <TextMedia accent={"red-wire"} flipped={true} image={contentTwo.image} title={contentTwo.title} paragraphs={contentTwo.body} />
        <TextMedia accent={"yellow-wire"} flipped={false} image={contentThree.image} title={contentThree.title} paragraphs={contentThree.body} />
        <TextMedia accent={"wires-yellow"} flipped={true} image={contentFour.image} title={contentFour.title} paragraphs={contentFour.body} />
        <TextMedia accent={""} flipped={false} image={contentFive.image} title={contentFive.title} paragraphs={contentFive.body} />
      </div>
    </div>
  )
}
