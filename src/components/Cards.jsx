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
      url: '../src/assets/images/AdobeStock_599068852_Preview 1.jpg',
      alt: 'Image of house and car outside',
      title: 'Residential',
      body: 'Lighting, Electrical, Ceiling, Electrical Panels, Smoke and Carbon Monoxide detectors.'
    },
    {
      url: '../src/assets/images/AdobeStock_599068852_Preview 1.jpg',
      alt: 'Image of house and car outside',
      title: 'Residential',
      body: 'Lighting, Electrical, Ceiling, Electrical Panels, Smoke and Carbon Monoxide detectors.'
    },
    {
      url: '../src/assets/images/AdobeStock_599068852_Preview 1.jpg',
      alt: 'Image of house and car outside',
      title: 'Residential',
      body: 'Lighting, Electrical, Ceiling, Electrical Panels, Smoke and Carbon Monoxide detectors.'
    },
    {
      url: '../src/assets/images/AdobeStock_599068852_Preview 1.jpg',
      alt: 'Image of house and car outside',
      title: 'Residential',
      body: 'Lighting, Electrical, Ceiling, Electrical Panels, Smoke and Carbon Monoxide detectors.'
    },
  ];
  const slideContent = cards.map((card) => {
    return (<Card imageUrl={card.url} imageAlt={card.alt} title={card.title} body={card.body}/>);
  });

  return (
    <div className="cards">
      <SwiperJs slides={slideContent}/>
    </div>
  );
}

export default Cards;