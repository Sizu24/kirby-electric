import SwiperJs from "./SwiperJs";
import Card from "./Card";

function Cards () {
  
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
  ];
  const slideContent = cards.map((card) => {
    return (
      <div>
        <Card imageUrl={card.url} imageAlt={card.alt} title={card.title} body={card.body}/>
        <Card imageUrl={card.url} imageAlt={card.alt} title={card.title} body={card.body}/>
      </div>
    )
  });

  return (
    <div className="cards">
      <SwiperJs slides={slideContent}/>
    </div>
  );
}

export default Cards;