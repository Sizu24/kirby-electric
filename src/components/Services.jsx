import Cards from "./Cards";
import Button from "./Button";

function Services() {

  const cards = [
    {
      url: '../src/assets/images/AdobeStock_599068852_Preview 1.jpg',
      alt: 'Image of house and car outside',
      title: 'Residential',
      body: 'Lighting, Electrical, Ceiling, Electrical Panels, Smoke and Carbon Monoxide detectors.'
    },
    {
      url: '../src/assets/images/AdobeStock_439136266_Preview 1.jpg',
      alt: 'Image of house and car outside',
      title: 'Commercial',
      body: 'Lighting, Electrical, Ceiling, Electrical Panels, Smoke and Carbon Monoxide detectors.'
    },
    {
      url: '../src/assets/images/AdobeStock_120137915_Preview 1.jpg',
      alt: 'Image of house and car outside',
      title: 'Industrial',
      body: 'Lighting, Electrical, Ceiling, Electrical Panels, Smoke and Carbon Monoxide detectors.'
    },
    {
      url: '../src/assets/images/AdobeStock_599068852_Preview 1.jpg',
      alt: 'Image of house and car outside',
      title: 'Lighting',
      body: 'Lighting, Electrical, Ceiling, Electrical Panels, Smoke and Carbon Monoxide detectors.'
    },
    {
      url: '../src/assets/images/AdobeStock_439136266_Preview.jpg',
      alt: 'Image of house and car outside',
      title: 'Emergency',
      body: 'Lighting, Electrical, Ceiling, Electrical Panels, Smoke and Carbon Monoxide detectors.'
    },
    {
      url: '../src/assets/images/AdobeStock_120137915_Preview.jpg',
      alt: 'Image of house and car outside',
      title: 'Network',
      body: 'Lighting, Electrical, Ceiling, Electrical Panels, Smoke and Carbon Monoxide detectors.'
    },
    {
      url: '../src/assets/images/AdobeStock_599068852_Preview 1.jpg',
      alt: 'Image of house and car outside',
      title: 'Lighting',
      body: 'Lighting, Electrical, Ceiling, Electrical Panels, Smoke and Carbon Monoxide detectors.'
    },
    {
      url: '../src/assets/images/AdobeStock_439136266_Preview.jpg',
      alt: 'Image of house and car outside',
      title: 'Emergency',
      body: 'Lighting, Electrical, Ceiling, Electrical Panels, Smoke and Carbon Monoxide detectors.'
    },
    {
      url: '../src/assets/images/AdobeStock_120137915_Preview.jpg',
      alt: 'Image of house and car outside',
      title: 'Network',
      body: 'Lighting, Electrical, Ceiling, Electrical Panels, Smoke and Carbon Monoxide detectors.'
    },
    {
      url: '../src/assets/images/AdobeStock_120137915_Preview.jpg',
      alt: 'Image of house and car outside',
      title: 'Network',
      body: 'Lighting, Electrical, Ceiling, Electrical Panels, Smoke and Carbon Monoxide detectors.'
    },
  ];

  return (
    <div className="services plug">
      <div className="section-container">
        <h2 className="section__title">Our comprehensive Electrical Services</h2>
        <p className="section__subhead">Meeting All Your Electrical Needs with Expertise and Precision</p>  
        <div className="section__slider">
          <Cards cardList={cards} />
        </div>
        <Button className={"primary button--center"} clickHandler={() => {}} text={"See All Services"} />
      </div>
    </div>
  );
}

export default Services;