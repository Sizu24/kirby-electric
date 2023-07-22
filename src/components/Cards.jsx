import SwiperJs from "./SwiperJs";
import Card from "./Card";

function Cards({ cardList }) { 
  if (!Array.isArray(cardList)) {
    return <div>No cards to display.</div>;
  }

  const slideContent = cardList.map((card, index) => (
    <div key={index}>
      <Card imageUrl={card.url} imageAlt={card.alt} title={card.title} body={card.body}/>
    </div>
  ));

  return (
    <div className="cards">
      <SwiperJs slides={slideContent}/>
    </div>
  );
}

export default Cards;
