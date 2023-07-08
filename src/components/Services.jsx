import Cards from "./Cards";
import Button from "./Button";

function Services() {

  return (
    <div className="services plug">
      <div className="section-container">
        <h2 className="section__title">Our comprehensive Electrical Services</h2>
        <p className="section__subhead">Meeting All Your Electrical Needs with Expertise and Precision</p>  
        <div className="section__slider">
          <Cards />
        </div>
        <Button className={"primary button--center"} clickHandler={() => {}} text={"See All Services"} />
      </div>
    </div>
  );
}

export default Services;